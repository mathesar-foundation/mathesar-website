import { describe, expect, it } from "vitest";
import { load as loadSolutionPage } from "../../src/routes/solutions/[id]/+page.server";
import { solutionIds } from "$lib/solutions/ids";
import { solutionImages } from "$lib/solutions/images";
import { solutionIcons } from "$lib/solutions/icons";
import { solutionPresentation } from "$lib/solutions/presentation";
import {
  getSolutionNavItems,
  getSolutions,
  validateSolutionContent,
  validateSolutionContracts,
  validateSolutions,
  type SolutionContent,
  type SolutionValidationRegistries,
} from "$lib/server/solutions";

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const solutions = getSolutions();

function cloneSolutions(): SolutionContent[] {
  return JSON.parse(JSON.stringify(solutions)) as SolutionContent[];
}

function expectNonEmptyString(value: unknown, label: string) {
  expect(typeof value, label).toBe("string");
  expect((value as string).trim().length, label).toBeGreaterThan(0);
}

function getDefaultRegistries(): SolutionValidationRegistries {
  return {
    presentation: solutionPresentation,
    images: solutionImages,
    icons: solutionIcons,
  };
}

describe("solution content", () => {
  it("loads the configured solution IDs in canonical order", () => {
    expect(solutions.map((solution) => solution.id)).toEqual(solutionIds);
  });

  it("has unique, slug-safe solution IDs", () => {
    const ids = solutions.map((solution) => solution.id);

    expect(ids.length).toBeGreaterThan(0);
    expect(new Set(ids).size).toBe(ids.length);
    ids.forEach((id) => expect(id).toMatch(slugPattern));
  });

  it("defines required editorial fields for every solution", () => {
    solutions.forEach((solution) => {
      expectNonEmptyString(solution.title, `${solution.id} title`);
      expectNonEmptyString(solution.description, `${solution.id} description`);
      expectNonEmptyString(solution.category.id, `${solution.id} category.id`);
      expectNonEmptyString(
        solution.category.title,
        `${solution.id} category.title`,
      );
      expectNonEmptyString(
        solution.category.description,
        `${solution.id} category.description`,
      );
      expect(solution).not.toHaveProperty("meta");
      expect(
        solution.screenshots.length,
        `${solution.id} screenshots`,
      ).toBeGreaterThan(0);
      expect(
        solution.features.length,
        `${solution.id} features`,
      ).toBeGreaterThan(0);
      solution.screenshots.forEach((screenshot, index) => {
        expectNonEmptyString(
          screenshot.caption,
          `${solution.id} screenshot ${index + 1} caption`,
        );
      });
    });
  });

  it("rejects malformed solution content", () => {
    const invalid: unknown = cloneSolutions().map((solution, index) =>
      index === 0 ? { ...solution, title: " " } : solution,
    );

    expect(() => validateSolutions(invalid)).toThrow(
      /Invalid _data\/solutions.yml/,
    );
  });

  it("rejects duplicate solution IDs", () => {
    const invalid = cloneSolutions();
    invalid[1] = { ...invalid[1], id: invalid[0].id };

    expect(() => validateSolutionContent(invalid)).toThrow(
      /Duplicate solution IDs/,
    );
  });

  it("rejects non-slug-safe solution IDs", () => {
    const invalid: unknown = cloneSolutions().map((solution, index) =>
      index === 0 ? { ...solution, id: "Bike Shop" } : solution,
    );

    expect(() => validateSolutionContent(invalid)).toThrow(
      /Invalid _data\/solutions.yml/,
    );
  });
});

describe("solution registries", () => {
  it("defines exact presentation and image coverage for all solution IDs", () => {
    expect(Object.keys(solutionPresentation).sort()).toEqual(
      [...solutionIds].sort(),
    );
    expect(Object.keys(solutionImages).sort()).toEqual([...solutionIds].sort());
  });

  it("uses only supported presentation icon keys", () => {
    Object.values(solutionPresentation).forEach((presentation) => {
      expect(presentation.icon in solutionIcons).toBe(true);
    });
  });

  it("matches screenshot captions to screenshot image assets", () => {
    solutions.forEach((solution) => {
      expect(solutionImages[solution.id].screenshots).toHaveLength(
        solution.screenshots.length,
      );
    });
  });

  it("rejects missing presentation registry entries", () => {
    const registries = getDefaultRegistries();
    const { "bike-shop": _bikeShop, ...presentation } = registries.presentation;

    expect(() =>
      validateSolutionContracts(solutions, { ...registries, presentation }),
    ).toThrow(/Solution presentation coverage mismatch/);
  });

  it("rejects extra presentation registry entries", () => {
    const registries = getDefaultRegistries();
    const presentation = {
      ...registries.presentation,
      "extra-solution": registries.presentation["bike-shop"],
    };

    expect(() =>
      validateSolutionContracts(solutions, { ...registries, presentation }),
    ).toThrow(/Solution presentation coverage mismatch/);
  });

  it("rejects unsupported icon keys in presentation", () => {
    const registries = getDefaultRegistries();
    const presentation = {
      ...registries.presentation,
      "bike-shop": {
        ...registries.presentation["bike-shop"],
        icon: "UnknownIcon",
      },
    };

    expect(() =>
      validateSolutionContracts(solutions, { ...registries, presentation }),
    ).toThrow(/Unsupported solution icon/);
  });

  it("rejects missing image registry entries", () => {
    const registries = getDefaultRegistries();
    const { "bike-shop": _bikeShop, ...images } = registries.images;

    expect(() =>
      validateSolutionContracts(solutions, { ...registries, images }),
    ).toThrow(/Solution images coverage mismatch/);
  });

  it("rejects screenshot count mismatches", () => {
    const registries = getDefaultRegistries();
    const images = {
      ...registries.images,
      "bike-shop": {
        ...registries.images["bike-shop"],
        screenshots: registries.images["bike-shop"].screenshots.slice(0, 1),
      },
    };

    expect(() =>
      validateSolutionContracts(solutions, { ...registries, images }),
    ).toThrow(/screenshot captions/);
  });
});

describe("solution route data", () => {
  it("returns lightweight nav items", () => {
    const navItems = getSolutionNavItems();

    expect(navItems).toHaveLength(solutions.length);
    navItems.forEach((item) => {
      expect(Object.keys(item).sort()).toEqual([
        "categoryTitle",
        "icon",
        "id",
        "title",
      ]);
      expect(item).not.toHaveProperty("description");
      expect(item).not.toHaveProperty("features");
      expect(item).not.toHaveProperty("screenshots");
    });
  });

  it("does not expose full solution records in detail page nav data", async () => {
    const result = (await loadSolutionPage({
      params: { id: "bike-shop" },
    } as Parameters<typeof loadSolutionPage>[0])) as {
      solution: SolutionContent;
      solutionNavItems: ReturnType<typeof getSolutionNavItems>;
    };

    expect(result.solution.id).toBe("bike-shop");
    result.solutionNavItems.forEach((item) => {
      expect(item).not.toHaveProperty("description");
      expect(item).not.toHaveProperty("features");
      expect(item).not.toHaveProperty("screenshots");
    });
  });
});

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "yaml";
import type { ZodError } from "zod";
import { solutionIcons } from "$lib/solutions/icons";
import { solutionImages } from "$lib/solutions/images";
import { solutionPresentation } from "$lib/solutions/presentation";
import {
  solutionsContentSchema,
  type SolutionContent,
  type SolutionNavItem,
} from "$lib/solutions/schema";

export type { SolutionContent, SolutionNavItem } from "$lib/solutions/schema";

export type SolutionValidationRegistries = {
  presentation: Readonly<Record<string, { icon: string }>>;
  images: Readonly<Record<string, { screenshots: readonly unknown[] }>>;
  icons: Readonly<Record<string, unknown>>;
};

const defaultValidationRegistries = {
  presentation: solutionPresentation,
  images: solutionImages,
  icons: solutionIcons,
} satisfies SolutionValidationRegistries;

function formatZodError(error: ZodError) {
  return error.issues
    .map((issue) => {
      const path = issue.path.length ? issue.path.join(".") : "root";
      return `${path}: ${issue.message}`;
    })
    .join("; ");
}

function assertUniqueIds(solutions: SolutionContent[]) {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  solutions.forEach((solution) => {
    if (seen.has(solution.id)) duplicates.add(solution.id);
    seen.add(solution.id);
  });

  if (duplicates.size) {
    throw new Error(
      `Duplicate solution IDs: ${Array.from(duplicates).sort().join(", ")}`,
    );
  }
}

function assertExactKeys(
  label: string,
  expectedIds: readonly string[],
  actualIds: readonly string[],
) {
  const expected = new Set(expectedIds);
  const actual = new Set(actualIds);
  const missing = expectedIds.filter((id) => !actual.has(id));
  const extra = actualIds.filter((id) => !expected.has(id));

  if (missing.length || extra.length) {
    throw new Error(
      `${label} coverage mismatch. Missing: ${missing.join(", ") || "none"}. Extra: ${extra.join(", ") || "none"}.`,
    );
  }
}

function assertPresentationContracts(
  solutions: SolutionContent[],
  registries: SolutionValidationRegistries,
) {
  const ids = solutions.map((solution) => solution.id);
  assertExactKeys(
    "Solution presentation",
    ids,
    Object.keys(registries.presentation),
  );

  ids.forEach((id) => {
    const icon = registries.presentation[id]?.icon;
    if (!icon || !(icon in registries.icons)) {
      throw new Error(`Unsupported solution icon "${icon}" for "${id}".`);
    }
  });
}

function assertImageContracts(
  solutions: SolutionContent[],
  registries: SolutionValidationRegistries,
) {
  const ids = solutions.map((solution) => solution.id);
  assertExactKeys("Solution images", ids, Object.keys(registries.images));

  solutions.forEach((solution) => {
    const images = registries.images[solution.id];
    if (images.screenshots.length !== solution.screenshots.length) {
      throw new Error(
        `Solution "${solution.id}" has ${solution.screenshots.length} screenshot captions but ${images.screenshots.length} screenshot images.`,
      );
    }
  });
}

export function validateSolutionContent(input: unknown): SolutionContent[] {
  const result = solutionsContentSchema.safeParse(input);
  if (!result.success) {
    throw new Error(
      `Invalid _data/solutions.yml: ${formatZodError(result.error)}`,
    );
  }

  const solutions = result.data;
  assertUniqueIds(solutions);

  return solutions;
}

export function validateSolutionContracts(
  solutions: SolutionContent[],
  registries: SolutionValidationRegistries = defaultValidationRegistries,
): SolutionContent[] {
  assertPresentationContracts(solutions, registries);
  assertImageContracts(solutions, registries);

  return solutions;
}

export function validateSolutions(
  input: unknown,
  registries: SolutionValidationRegistries = defaultValidationRegistries,
): SolutionContent[] {
  const solutions = validateSolutionContent(input);
  validateSolutionContracts(solutions, registries);

  return solutions;
}

export function getSolutions(): SolutionContent[] {
  const filePath = join(process.cwd(), "_data", "solutions.yml");
  const fileContents = readFileSync(filePath, "utf8");
  const parsed: unknown = parse(fileContents);
  return validateSolutions(parsed);
}

export function getSolution(
  id: string,
  solutions: SolutionContent[] = getSolutions(),
): SolutionContent | undefined {
  return solutions.find((solution) => solution.id === id);
}

export function getSolutionNavItems(
  solutions: SolutionContent[] = getSolutions(),
): SolutionNavItem[] {
  return solutions.map((solution) => ({
    id: solution.id,
    title: solution.title,
    categoryTitle: solution.category.title,
    icon: solutionPresentation[solution.id].icon,
  }));
}

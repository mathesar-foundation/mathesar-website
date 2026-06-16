import { z } from "zod";
import { solutionIds } from "$lib/solutions/ids";
import type { SolutionIconName } from "$lib/solutions/icons";

const nonEmptyString = z.string().trim().min(1);
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const solutionIdSchema = z
  .enum(solutionIds)
  .refine(
    (id) => slugPattern.test(id),
    "Solution IDs must be lowercase slug-safe strings",
  );

export const solutionFeatureSchema = z
  .object({
    title: nonEmptyString,
    description: nonEmptyString,
  })
  .strict();

export const solutionContentSchema = z
  .object({
    id: solutionIdSchema,
    title: nonEmptyString,
    description: nonEmptyString,
    category: z
      .object({
        id: nonEmptyString,
        title: nonEmptyString,
        description: nonEmptyString,
      })
      .strict(),
    screenshots: z
      .array(
        z
          .object({
            caption: nonEmptyString,
          })
          .strict(),
      )
      .min(1),
    features: z.array(solutionFeatureSchema).min(1),
    mathesarFeatures: z
      .array(
        z
          .object({
            title: nonEmptyString,
          })
          .strict(),
      )
      .optional(),
    similarSolutions: z.array(solutionFeatureSchema).optional(),
  })
  .strict();

export const solutionsContentSchema = z.array(solutionContentSchema).min(1);

export type SolutionContent = z.infer<typeof solutionContentSchema>;

export type SolutionNavItem = {
  id: SolutionContent["id"];
  title: SolutionContent["title"];
  categoryTitle: SolutionContent["category"]["title"];
  icon: SolutionIconName;
};

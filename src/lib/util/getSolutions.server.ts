import { parse } from "yaml";
import { readFileSync } from "fs";
import { join } from "path";

export interface Solution {
  id: string;
  title: string;
  subtitle?: string;
  category: {
    id: string;
    title: string;
    description: string;
  };
  meta: {
    bgColor?: string;
    cta?: string;
    highlightTerm?: string;
    icon: string;
    image?: string;
    theme?: string;
  };
  description: string;
  features?: Array<{ title: string; description: string }>;
  similarSolutions?: Array<{ title: string; description: string }>;
  example?: {
    id: string;
    title: string;
    description: string;
  };
  screenshots: Array<{ caption: string }>;
  mathesarFeatures?: Array<{ title: string; description: string }>;
}

export function getSolutions() {
  const filePath = join(process.cwd(), "_data", "solutions.yml");
  const fileContents = readFileSync(filePath, "utf8");
  let solutions: Solution[] = parse(fileContents);

  return solutions;
}

export function getSolution(id: string) {
  const solutions = getSolutions();
  const solution = solutions.find((i) => i.id === id);
  return solution;
}

import { parse } from "yaml";
import { readFileSync } from "fs";
import { join } from "path";

export interface Dataset {
  slug: string;
  title: string;
  description: string;
  howToUse: string;
  sourceUrl: string;
  sourceName: string;
  username: string;
  password: string;
  iframeUrl: string;
  category: string;
  color: string;
}

export function getDatasets(): Dataset[] {
  const filePath = join(process.cwd(), "_data", "datasets.yml");
  const fileContents = readFileSync(filePath, "utf8");
  const datasets: Dataset[] = parse(fileContents);
  return datasets;
}

export function getDataset(slug: string): Dataset | undefined {
  const datasets = getDatasets();
  return datasets.find((d) => d.slug === slug);
}

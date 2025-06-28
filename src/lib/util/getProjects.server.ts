import { parse } from "yaml";
import { readFileSync } from "fs";
import { join } from "path";
export interface Project {
  title: string;
  url: string;
  status: string;
}

export function getProjects() {
  const filePath = join(process.cwd(), "_data", "projects.yml");
  const fileContents = readFileSync(filePath, "utf8");
  let project: Project[] = parse(fileContents);
  return project;
}

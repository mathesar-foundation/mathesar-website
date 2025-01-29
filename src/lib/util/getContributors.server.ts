import { parse } from "yaml";
import { readFileSync } from "fs";
import { join } from "path";
export interface Contributor {
  name: string;
  profile_image: string;
  profile_url: string;
  username: string;
}

export function getContributors() {
  const filePath = join(process.cwd(), "_data", "contributors.yml");
  const fileContents = readFileSync(filePath, "utf8");
  let contributor: Contributor[] = parse(fileContents);
  return contributor.filter((i) => i.name && !i.name.endsWith("[bot]"));
}

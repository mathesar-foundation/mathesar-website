import { parse } from "yaml";
import { readFileSync } from "fs";
import { join } from "path";
import markdownit from "markdown-it";

interface Staff {
  name: string;
  image: string;
  role: string;
  type: "staff" | "board";
  bio?: string;
}

export function getStaff() {
  const md = markdownit({ html: true });
  const filePath = join(process.cwd(), "_data", "staff.yml");
  const fileContents = readFileSync(filePath, "utf8");
  let staff: Staff[] = parse(fileContents);
  staff = staff.map((staffer) => ({
    ...staffer,
    bio: staffer.bio ? md.render(staffer.bio) : undefined,
  }));

  return staff;
}

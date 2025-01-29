import { error } from "@sveltejs/kit";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownit from "markdown-it";

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image: string;
  path: string;
  content: string;
}

export async function getBlogPosts() {
  const md = markdownit({ html: true });

  try {
    // Get the _posts directory path relative to the project root
    const postsDirectory = path.join(process.cwd(), "_posts");
    const files = fs.readdirSync(postsDirectory);

    // Process each markdown file
    const posts = files
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContent = fs.readFileSync(filePath, "utf-8");

        // Parse frontmatter
        const { data, content } = matter(fileContent);

        // Extract date and slug from filename
        const [year, month, day, ...slugParts] = filename
          .replace(/\.md$/, "")
          .split("-");
        const slug = slugParts.join("-");
        const blogPath = `${year}/${month}/${day}/${slug}`;

        const id = filename.replace(/\.md$/, "");

        // Convert space-separated tags string to array if needed
        const tags =
          typeof data.tags === "string"
            ? data.tags.split(" ")
            : data.tags || [];

        // Format the post data
        const post: BlogPost = {
          id,
          title: data.title,
          description: data.description,
          date: new Date(data.date).toISOString().split("T")[0],
          author: data.author,
          tags,
          path: blogPath,
          image: data.image,
          content: md.render(content),
        };

        return post;
      })
      // Sort posts by date, newest first
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
  } catch (err) {
    console.error("Error loading blog posts:", err);
    throw error(500, "Error loading blog posts");
  }
}

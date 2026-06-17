export interface BlogAuthor {
  name: string;
  avatar?: string;
  initials: string;
}

const blogAuthors: Record<string, Omit<BlogAuthor, "initials">> = {
  kriti_godey: {
    name: "Kriti Godey",
    avatar: "/staff/kriti.jpg",
  },
  "Kriti Godey": {
    name: "Kriti Godey",
    avatar: "/staff/kriti.jpg",
  },
  zack_krida: {
    name: "Zack Krida",
    avatar: "/staff/zack.jpg",
  },
  sean_colsen: {
    name: "Sean Colsen",
    avatar: "https://github.com/seancolsen.png",
  },
  mathesar_foundation: {
    name: "Mathesar Foundation",
    avatar: "/android-chrome-192x192.png",
  },
};

export function getBlogAuthor(author: string): BlogAuthor {
  const authorInfo = blogAuthors[author] ?? {
    name: formatAuthorName(author),
  };

  return {
    ...authorInfo,
    initials: getInitials(authorInfo.name),
  };
}

function formatAuthorName(author: string) {
  return author
    .replaceAll("_", " ")
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0))
    .join("");
}

import { readdirSync, readFileSync } from "fs";
import { formatDistance } from "date-fns";
import matter from "gray-matter";

export function getSortedPosts() {
  const files = readdirSync("content/posts");

  return files
    .map((filename) => {
      const markdownWithMetadata = readFileSync(`content/posts/${filename}`).toString();

      const { data, content } = matter(markdownWithMetadata);

      return {
        slug: filename.replace(".md", ""),
        content,
        ...data,
        dateRelative: formatDistance(new Date(data.date), new Date()),
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getPostsSlugs() {
  const files = readdirSync("content/posts");

  return files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
}

export function getPostBySlug(postSlug) {
  const posts = getSortedPosts();

  const postIndex = posts.findIndex(({ slug }) => slug === postSlug);

  const previousPost = posts[postIndex + 1] || null;
  const nextPost = posts[postIndex - 1] || null;

  return { ...posts[postIndex], previousPost, nextPost };
}

import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";

export function getPosts() {
  const files = readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = readFileSync(`content/posts/${filename}`).toString();

    const { data, content } = matter(markdownWithMetadata);

    return {
      slug: filename.replace(".md", ""),
      content,
      ...data,
    };
  });

  return posts;
}

export function getPostsSlugs() {
  const files = readdirSync("content/posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return paths;
}

export function getPostBySlug(postSlug) {
  const posts = getPosts();

  const postIndex = posts.findIndex(({ slug }) => slug === postSlug);

  const { title, date, content } = posts[postIndex];

  const previousPost = posts[postIndex + 1];
  const nextPost = posts[postIndex - 1];

  return { title, date, content, previousPost, nextPost };
}

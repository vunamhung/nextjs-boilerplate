import { readdirSync, readFileSync, statSync } from "fs";
import { formatDistance } from "date-fns";
import matter from "gray-matter";

export function getPosts() {
  const files = readdirSync(`${process.cwd()}/content/posts`);

  return files.map((filename) => {
    const markdownWithMetadata = readFileSync(`content/posts/${filename}`).toString();

    const getFileUpdatedDate = () => {
      const stats = statSync(`content/posts/${filename}`);
      return stats.mtime;
    };

    const { data, content } = matter(markdownWithMetadata);

    return {
      slug: filename.replace(".md", ""),
      date: formatDistance(getFileUpdatedDate(), new Date()),
      content,
      ...data,
    };
  });
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
  const posts = getPosts();

  const postIndex = posts.findIndex(({ slug }) => slug === postSlug);

  const { title, date, content } = posts[postIndex];

  const previousPost = posts[postIndex + 1] ? posts[postIndex + 1] : null;
  const nextPost = posts[postIndex - 1] ? posts[postIndex - 1] : null;

  return { title, date, content, previousPost, nextPost };
}

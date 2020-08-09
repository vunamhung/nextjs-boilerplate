import { readdirSync, readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown/with-html";
import Wrapper from "@/modules/Wrapper";
import Container from "@/components/Container";

export default function Post({ content, title, date }) {
  return (
    <Wrapper title={title}>
      <Container>
        <article>
          <h1>{title}</h1>
          <span>{date}</span>
          <ReactMarkdown escapeHtml={false} source={content} />
        </article>
      </Container>
    </Wrapper>
  );
}

export async function getStaticPaths() {
  const files = readdirSync("content/posts");

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = readFileSync(path.join("content/posts", `${slug}.md`)).toString();

  const { data, content } = matter(markdownWithMetadata);

  return {
    props: {
      content,
      ...data,
    },
  };
}

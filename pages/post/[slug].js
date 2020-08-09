import Link from "next/link";
import ReactMarkdown from "react-markdown/with-html";
import Wrapper from "@/modules/Wrapper";
import Container from "@/components/Container";
import { getPostBySlug, getPostsSlugs } from "@/lib/posts";

export default function Post({ content, title, date, nextPost, previousPost }) {
  return (
    <Wrapper title={title}>
      <Container>
        <article>
          <h1>{title}</h1>
          <span className="text-sm text-neutral-600">{date}</span>
          <ReactMarkdown escapeHtml={false} source={content} />
        </article>
        <nav className="flex justify-between py-10">
          {previousPost && (
            <Link href={"/post/[slug]"} as={`/post/${previousPost.slug}`}>
              <a className="text-lg font-bold">← {previousPost.title}</a>
            </Link>
          )}
          {nextPost && (
            <Link href={"/post/[slug]"} as={`/post/${nextPost.slug}`}>
              <a className="text-lg font-bold">{nextPost.title} →</a>
            </Link>
          )}
        </nav>
      </Container>
    </Wrapper>
  );
}

export async function getStaticPaths() {
  return {
    paths: getPostsSlugs(),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getPostBySlug(slug);

  return { props: postData };
}

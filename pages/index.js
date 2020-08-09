import { readdirSync, readFileSync } from "fs";
import Link from "next/link";
import matter from "gray-matter";
import Wrapper from "@/modules/Wrapper";
import Container from "@/components/Container";

export default function Home({ posts }) {
  return (
    <Wrapper title="Create Next App">
      <Container>
        {posts.map(({ title, description, date, slug }) => (
          <article className="mb-6" key={title}>
            <header>
              <h3>
                <Link href="/post/[slug]" as={`/post/${slug}`}>
                  <a>{title}</a>
                </Link>
              </h3>
              <span className="text-sm text-neutral-600">{date}</span>
            </header>
            <section>
              <p>{description}</p>
            </section>
          </article>
        ))}
      </Container>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const files = readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = readFileSync(`content/posts/${filename}`).toString();

    const { data } = matter(markdownWithMetadata);

    return {
      slug: filename.replace(".md", ""),
      ...data,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

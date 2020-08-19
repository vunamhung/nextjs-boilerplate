import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Wrapper from '@/modules/Wrapper';
import Container from '@/components/Container';
import { getSortedPosts } from '@/utilities/posts';

export default function Home({ posts }) {
  return (
    <Wrapper>
      <NextSeo title='Create Next Blog' description='A short description goes here.' />
      <Container>
        {posts.map(({ title, description, dateRelative, slug }) => (
          <article className='mb-6' key={title}>
            <header>
              <h3>
                <Link href='/post/[slug]' as={`/post/${slug}`}>
                  <a>{title}</a>
                </Link>
              </h3>
              <span className='text-sm text-neutral-600'>{dateRelative} ago</span>
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
  return {
    props: {
      posts: getSortedPosts(),
    },
  };
}

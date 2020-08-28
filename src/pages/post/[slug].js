import Link from 'next/link';
import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown/with-html';
import Wrapper from '@/modules/Wrapper';
import Container from '@/components/Container';
import { getPostBySlug, getPostsSlugs } from '@/utilities/posts';

export default function Post({ content, description, title, dateRelative, nextPost, previousPost }) {
  return (
    <Wrapper>
      <NextSeo title={title} description={description} />
      <main>
        <Container>
          <div className='mb-4'>
            <h1 className='font-bold'>{title}</h1>
            <span className='text-sm text-gray-600'>{dateRelative} ago</span>
          </div>
          <article className='prose prose-sm sm:prose lg:prose-lg'>
            <ReactMarkdown escapeHtml={false} source={content} />
          </article>
          <nav className='flex justify-between py-10'>
            {previousPost && (
              <Link href={'/post/[slug]'} as={`/post/${previousPost.slug}`}>
                <a className='text-lg font-bold'>← {previousPost.title}</a>
              </Link>
            )}
            {nextPost && (
              <Link href={'/post/[slug]'} as={`/post/${nextPost.slug}`}>
                <a className='text-lg font-bold'>{nextPost.title} →</a>
              </Link>
            )}
          </nav>
        </Container>
      </main>
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

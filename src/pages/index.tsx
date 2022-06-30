import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo title='Home' description='A short description goes here.' />
      <div className='container text-xl'>next</div>
    </>
  );
}

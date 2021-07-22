import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <div>
      <NextSeo title='Create Next Blog' description='A short description goes here.' />
      <div className='container'>next</div>
    </div>
  );
}

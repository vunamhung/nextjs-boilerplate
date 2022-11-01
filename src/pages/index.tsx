import { NextSeo } from 'next-seo';
import { Helmet } from 'react-helmet';

export default function Home() {
  const user = { id: 1 };
  return (
    <>
      <NextSeo title="Home" description="A short description goes here." />
      <Helmet>
        <script id="aecommerce-user">{`var SB_AECOMMERCE_ACTIVE_USER = ${user.id}`}</script>
      </Helmet>
      <div className="container text-xl">next</div>
    </>
  );
}

import Head from 'next/head';
import Feed from '../components/FeedComponents/Feed';
import Leftbar from '../components/LeftbarComponents/Leftbar';
import Rightbar from '../components/RightbarComponents/Rightbar';

export default function Home({ newsResults }) {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <meta
          name='description'
          content='Twitter clone developed by Akshay Benny'
        />
        <link
          rel='icon'
          href='https://pngimg.com/uploads/twitter/twitter_PNG3.png'
        />
      </Head>
      <main className='mx-auto flex min-h-screen lg:pr-4'>
        <Leftbar />
        <Feed />
        <Rightbar newsResults={newsResults.articles} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const newsResults = await fetch(
    'https://saurav.tech/NewsAPI/top-headlines/category/business/us.json'
  ).then((res) => res.json());

  return {
    props: {
      newsResults,
    },
  };
}

//https://saurav.tech/NewsAPI/top-headlines/category/business/in.json

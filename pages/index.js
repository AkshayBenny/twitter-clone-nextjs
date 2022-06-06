import Head from 'next/head';
import Feed from '../components/FeedComponents/Feed';
import Leftbar from '../components/LeftbarComponents/Leftbar';

export default function Home() {
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
      <main className='max-w-7xl mx-auto flex min-h-screen '>
        <Leftbar />
        <Feed />
      </main>
    </div>
  );
}

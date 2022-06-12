import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { useReducedMotionConfig } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CommentModal from '../../components/CommentModal';
import Leftbar from '../../components/LeftbarComponents/Leftbar';
import Rightbar from '../../components/RightbarComponents/Rightbar';
import SelectedPost from '../../components/SelectedPost';
import { db } from '../../firebase';

export default function Post({ newsResults, randomUsersToFollow }) {
  const router = useRouter();
  const id = router.query.id;
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'posts', id), (snapshot) =>
      setPost(snapshot)
    );
  }, [db, id]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'),
        orderBy('timestamp', 'desc')
      ),
      (snapshot) => setComments(snapshot.docs)
    );
  }, [db, id]);

  return (
    <>
      <Head>
        {post.id ? <title>{post.text}</title> : 'Loading..'}
        <meta
          name='description'
          content='Twitter clone developed by Akshay Benny'
        />
        <link
          rel='icon'
          href='https://pngimg.com/uploads/twitter/twitter_PNG3.png'
        />
      </Head>
      <main className='mx-auto flex min-h-screen'>
        <Leftbar />
        {post.id && <SelectedPost post={post} comments={comments}/>}
        <Rightbar
          newsResults={newsResults.articles}
          userResults={randomUsersToFollow}
        />
        <CommentModal />
       
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const newsResults = await fetch(
    'https://saurav.tech/NewsAPI/top-headlines/category/business/us.json'
  ).then((res) => res.json());

  const randomUsersToFollow = await fetch(
    'https://randomuser.me/api/?results=6&inc=name,login,picture'
  ).then((res) => res.json());

  return {
    props: {
      newsResults,
      randomUsersToFollow,
    },
  };
}

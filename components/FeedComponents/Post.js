import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  ShareIcon,
  HeartIcon,
  TrashIcon,
} from '@heroicons/react/outline';
import { HeartIcon as FilledHeartIcon } from '@heroicons/react/solid';
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from 'firebase/firestore';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { db } from '../../firebase';

export default function Post({ post }) {
  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const likePost = async () => {
    if (session) {
      if (hasLiked) {
        await deleteDoc(doc(db, 'posts', post.id, 'likes', session?.user?.uid));
      } else {
        await setDoc(doc(db, 'posts', post.id, 'likes', session?.user?.uid), {
          username: session.user.username,
        });
      }
    } else {
      //redirect to signin page
      signIn();
    }
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, 'posts', post.id, 'likes'),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db]);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  return (
    <div className='p-4 flex gap-4 border-b mt-4'>
      <img
        src={post?.data()?.userImg}
        alt='profile picture'
        className='rounded-full w-11 h-11  hover:brightness-95 transition cursor-pointer object-cover'
      />

      <div className='flex flex-col w-full '>
        <div className='flex justify-between  flex-grow'>
          <div className='flex items-center gap-2'>
            <h1 className='hover:underline cursor-pointer text-xl xl:text-2xl font-bold tracking-wide'>
              {post?.data()?.name}
            </h1>
            <p className='text-gray-600 text-lg hover:underline cursor-pointer'>
              @{post?.data()?.userName}
            </p>
            <p className='text-gray-800 text-base hover:underline cursor-pointer'>
              - <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment>
            </p>
          </div>
          <DotsHorizontalIcon className='h-10  p-2 text-gray-600 hover-gray rounded-full' />
        </div>
        <h1 className='text-xl xl:text-2xl pt-4 font-normal text-gray-8 text-gray-60000'>
          {post?.data()?.text}
        </h1>
        {post.data().image && (
          <img
            className='rounded-3xl pt-2 hover:brightness-90 transition cursor-pointer object-cover'
            src={post?.data()?.image}
          />
        )}
        <div className='flex justify-around items-center py-4'>
          <ChatIcon className='h-12  p-3 xl:p-2 text-gray-600 hover-gray rounded-full hover:text-sky-500 hover:bg-sky-50' />
          <div className='flex items-center'>
            {hasLiked ? (
              <FilledHeartIcon
                onClick={likePost}
                className='h-12 p-3 xl:p-2 text-red-600 hover-gray rounded-full hover:text-red-500 hover:bg-red-50'
              />
            ) : (
              <HeartIcon
                onClick={likePost}
                className='h-12 p-3 xl:p-2 text-gray-600 hover-gray rounded-full hover:text-red-500 hover:bg-red-50'
              />
            )}
            {likes.length > 0 ? (
              <p className={`${hasLiked ? 'text-red-600' : 'text-gray-600'}`}>
                {likes.length}
              </p>
            ) : null}
          </div>
          <ShareIcon className='h-12 p-3 xl:p-2 text-gray-600 hover-gray rounded-full hover:text-sky-500 hover:bg-sky-50' />
          <ChartBarIcon className='h-12 p-3 xl:p-2 text-gray-600 hover-gray rounded-full hover:text-sky-500 hover:bg-sky-50' />
          <TrashIcon className='h-12  p-3 xl:p-2 text-gray-600 hover-gray rounded-full hover:bg-red-50 hover:text-red-500' />
        </div>
      </div>
    </div>
  );
}

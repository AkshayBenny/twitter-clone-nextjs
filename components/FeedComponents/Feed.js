import { SparklesIcon } from '@heroicons/react/outline';
import { useState, useEffect } from 'react';
import Input from './Input';
import Post from './Post';
import { useSession } from 'next-auth/react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { AnimatePresence, motion } from 'framer-motion';

export default function Feed() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, 'posts')),
      orderBy('timestamp', 'desc'),
      (snapshot) => setPosts(snapshot.docs)
    );
  }, []);

  return (
    <div className='2xl:ml-96 sm:ml-14  border-x flex-grow xl:min-w-[576px] '>
      <div className='flex justify-between items-center py-2 px-3 sticky border-b top-0 z-50 bg-white'>
        <h1 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h1>
        <div className='flex justify-center items-center hover-gray rounded-full p-2'>
          <SparklesIcon className='h-7' />
        </div>
      </div>
      {session && <Input />}
      <AnimatePresence>
        {posts.map((post, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Post post={post} key={index} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

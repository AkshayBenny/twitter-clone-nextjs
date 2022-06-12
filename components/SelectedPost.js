import { ArrowLeftIcon, SparklesIcon } from '@heroicons/react/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Comment from './Comment';

import Post from './FeedComponents/Post';

export default function SelectedPost({ post, comments }) {
  const router = useRouter();
  return (
    <div className='2xl:ml-96 sm:ml-14  border-x flex-grow xl:min-w-[576px] '>
      <div className='flex justify-between items-center py-2 px-3 sticky border-b top-0 z-50 bg-white'>
        <ArrowLeftIcon
          className='h-10 p-2 hover-gray rounded-full duration-300 ease-out'
          onClick={() => router.push('/')}
        />
      </div>

      <Post post={post} />
      <AnimatePresence>
        {comments.map((comment, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Comment
                key={index}
                comment={comment.data()}
                commentId={comment.id}
                originalPostId={router.query.id}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

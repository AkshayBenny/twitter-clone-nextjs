import { SearchIcon } from '@heroicons/react/outline';
import News from './News';
import { useState } from 'react';
import RandomUser from './RandomUser';
import { AnimatePresence, motion } from 'framer-motion';

export default function Rightbar({ newsResults, userResults }) {
  const [newsNumber, setNewsNumber] = useState(3);
  const [userNumber, setUserNumber] = useState(3);

  return (
    <div className='xl:w-[600px] hidden lg:inline ml-8 space-y-5'>
      <div
        // onSubmit={searchHandler}
        className='w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50'
      >
        <div className='flex items-center p-3 rounded-full  relative'>
          <SearchIcon className='h-5 z-50 text-gray-500' />
          <input
            className='absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100 '
            type='text'
            placeholder='Search Twitter'
          />
        </div>
      </div>
      <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]'>
        <h4 className='font-bold text-xl p-4'>What&apos;s happening ?</h4>
        <AnimatePresence>
          {newsResults.slice(0, newsNumber).map((news, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <News key={index} news={news} />
              </motion.div>
            );
          })}
        </AnimatePresence>
        <button
          onClick={() => setNewsNumber(newsNumber + 3)}
          className='text-blue-300 pl-4 pb-3 hover:text-blue-400 cursor-pointer transition'
        >
          Show more
        </button>
      </div>

      <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]'>
        <h4 className='font-bold text-xl p-4'>Who to follow ?</h4>

        <AnimatePresence>
          {userResults.results.slice(0, userNumber).map((user, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <RandomUser key={index} user={user} />
              </motion.div>
            );
          })}
        </AnimatePresence>

        <button
          onClick={() => setUserNumber(userNumber + 3)}
          className='text-blue-300 pl-4 pb-3 hover:text-blue-400 cursor-pointer transition'
        >
          Show more
        </button>
      </div>
    </div>
  );
}

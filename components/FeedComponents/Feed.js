import { SparklesIcon } from '@heroicons/react/outline';
import React from 'react';
import Input from './Input';
import Post from './Post';

export default function Feed() {
  return (
    <div className='2xl:ml-96 sm:ml-14  border-x flex-grow xl:min-w-[576px] '>
      <div className='flex justify-between items-center py-2 px-3 sticky border-b top-0 z-50 bg-white'>
        <h1 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h1>
        <div className='flex justify-center items-center hover-gray rounded-full p-2'>
          <SparklesIcon className='h-7' />
        </div>
      </div>
      <Input />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

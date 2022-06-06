import { EmojiHappyIcon, PhotographIcon } from '@heroicons/react/outline';

export default function Input() {
  return (
    <div className='border-b px-3 space-y-4'>
      <div className='flex gap-4 pt-4'>
        <div>
          <img
            src='https://avatars.githubusercontent.com/u/87773857?v=4'
            alt='profile picture'
            className='rounded-full w-11 h-11 hover:brightness-95 transition cursor-pointer object-cover'
          />
        </div>
        <div className='flex-grow'>
          <textarea
            placeholder="What's happening?"
            rows='2'
            className='w-full outline-none'
            type='text'
          />
        </div>
      </div>
      <div className='flex justify-between items-center pb-4'>
        <div className='text-sky-500 flex space-x-2'>
          <PhotographIcon className='h-10 hover-gray rounded-full p-1' />
          <EmojiHappyIcon className='h-10 hover-gray rounded-full p-1' />
        </div>
        <div>
          <button className='bg-sky-400 px-6 py-3 text-lg rounded-full text-white font-bold blue-btn'>
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

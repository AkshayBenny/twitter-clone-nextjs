import { EmojiHappyIcon, PhotographIcon } from '@heroicons/react/outline';
import { useSession, signOut } from 'next-auth/react';

export default function Input() {
  const { data:session } = useSession();
  
  return (
    <div className='border-b p-4 flex space-y-4'>
      <img
      onClick={signOut}
        src={session? session.user.image:"https://eschoolz.in/schoolz/backup/app/stories/images/user.png"}
        alt='profile picture'
        className='rounded-full w-11 h-11 mt-4  hover:brightness-95 transition cursor-pointer object-cover'
      />

      <div className='w-full flex-grow'>
        <div className='border-b w-full mb-4'>
          <textarea
            placeholder="What's happening?"
            rows='2'
            className='w-full min-h-[50px] text-lg text-gray-700 placeholder-gray-500   tracking-wide border-none focus:ring-0 outline-none'
            type='text'
          />
        </div>
        <div className='flex justify-between items-center'>
          <div className='text-sky-500 flex space-x-2'>
            <PhotographIcon className='h-10 hover-gray rounded-full p-1' />
            <EmojiHappyIcon className='h-10 hover-gray rounded-full p-1' />
          </div>
          <div>
            <button className='bg-sky-400 px-6 py-3 text-lg rounded-full text-white font-bold blue-btn disabled:opacity-50 disabled:cursor-not-allowed'>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

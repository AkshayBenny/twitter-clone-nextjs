import { DotsHorizontalIcon } from '@heroicons/react/outline';

export default function User() {
  return (
    <div className='flex 2xl:mt-auto justify-center 2xl:justify-start 2xl:hover-gray transition rounded-full px-1 2xl:px-4 py-3  items-center 2xl:space-x-4'>
      <img
        src='https://avatars.githubusercontent.com/u/87773857?v=4'
        alt='profile picture'
        className='rounded-full 2xl:w-16 object-cover'
      />
      <div className='hidden 2xl:inline-block'>
        <h1>Akshay Benny</h1>
        <p className='text-sm text-gray-500'>@akshaybenny976</p>
      </div>
      <DotsHorizontalIcon className='h-5' />
    </div>
  );
}

import { DotsHorizontalIcon } from '@heroicons/react/outline';

export default function User() {
  return (
    <div className='flex xl:mt-auto justify-center xl:justify-start xl:hover-gray transition rounded-full px-1 xl:px-4 py-3  items-center xl:space-x-4'>
      <img
        src='https://avatars.githubusercontent.com/u/87773857?v=4'
        alt='profile picture'
        className='rounded-full xl:w-16 object-cover'
      />
      <div className='hidden xl:inline-block'>
        <h1>Akshay Benny</h1>
        <p className='text-sm text-gray-500'>@akshaybenny976</p>
      </div>
      <DotsHorizontalIcon className='h-5' />
    </div>
  );
}

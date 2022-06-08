import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  ShareIcon,
  HeartIcon,
  TrashIcon,
} from '@heroicons/react/outline';

export default function Post() {
  return (
    <div className='p-4 flex gap-4 border-b mt-4'>
      <img
        src='https://avatars.githubusercontent.com/u/87773857?v=4'
        alt='profile picture'
        className='rounded-full w-11 h-11  hover:brightness-95 transition cursor-pointer object-cover'
      />

      <div className='flex flex-col w-full '>
        <div className='flex justify-between  flex-grow'>
          <div className='flex items-center gap-2'>
            <h1 className='hover:underline cursor-pointer text-xl xl:text-2xl font-bold tracking-wide'>
              Akshay Benny
            </h1>
            <p className='text-gray-600 text-lg hover:underline cursor-pointer'>
              @akshaybenny987
            </p>
            <p className='text-gray-800 text-base hover:underline cursor-pointer'>
              6 days ago
            </p>
          </div>
          <DotsHorizontalIcon className='h-10  p-2 text-gray-600 hover-gray rounded-full' />
        </div>
        <h1 className='text-xl xl:text-2xl pt-4 font-normal text-gray-8 text-gray-60000'>
          Travel is the only thing you buy that makes you richer.
        </h1>
        <img
          className='rounded-3xl pt-2 hover:brightness-90 transition cursor-pointer object-cover'
          src='https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt='post'
        />
        <div className='flex justify-around items-center py-4'>
          <ChatIcon className='h-12  p-3 xl:p-2 text-gray-600 hover-gray rounded-full hover:text-sky-500 hover:bg-sky-50' />
          <HeartIcon className='h-12 p-3 xl:p-2 text-gray-600 hover-gray rounded-full hover:text-red-500 hover:bg-red-50' />
          <ShareIcon className='h-12 p-3 xl:p-2 text-gray-600 hover-gray rounded-full hover:text-sky-500 hover:bg-sky-50' />
          <ChartBarIcon className='h-12 p-3 xl:p-2 text-gray-600 hover-gray rounded-full hover:text-sky-500 hover:bg-sky-50' />
          <TrashIcon className='h-12  p-3 xl:p-2 text-gray-600 hover-gray rounded-full hover:bg-red-50 hover:text-red-500' />
        </div>
      </div>
    </div>
  );
}

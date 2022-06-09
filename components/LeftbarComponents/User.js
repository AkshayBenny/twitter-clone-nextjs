import { DotsHorizontalIcon } from '@heroicons/react/outline';
import { useSession, signOut } from 'next-auth/react';
export default function User() {
  const { data: session } = useSession();
  return (
    <div className='flex 2xl:mt-auto justify-center 2xl:justify-start 2xl:hover-gray transition rounded-full px-1 2xl:px-4 py-3  items-center 2xl:space-x-4'>
      <img
        onClick={signOut}
        src={
          session
            ? session.user.image
            : 'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
        }
        alt='profile picture'
        className='rounded-full 2xl:w-16 object-cover cursor-pointer'
      />
      <div className='hidden 2xl:inline-block'>
        <h1>{session.user.name}</h1>
        <p className='text-sm text-gray-500'>@{session.user.username}</p>
      </div>
      <DotsHorizontalIcon className='h-5' />
    </div>
  );
}

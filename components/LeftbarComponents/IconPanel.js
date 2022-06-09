import Image from 'next/image';
import React from 'react';
import LeftbarMenuItem from './LeftbarMenuItem';
import { HomeIcon } from '@heroicons/react/solid';
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from '@heroicons/react/outline';
import { useSession, signIn } from 'next-auth/react';
export default function IconPanel() {
  const { data: session } = useSession();
  return (
    <div>
      <div>
        <Image
          className='rounded-full hover-gray'
          height='60'
          width='60'
          src='https://pngimg.com/uploads/twitter/twitter_PNG3.png'
          alt='twitter logo'
        />
      </div>
      <div>
        <LeftbarMenuItem text='Home' Icon={HomeIcon} bold={true} />
        <LeftbarMenuItem text='Explore' Icon={HashtagIcon} />
        {session && (
          <>
            <LeftbarMenuItem text='Notifications' Icon={BellIcon} />
            <LeftbarMenuItem text='Messages' Icon={InboxIcon} />
            <LeftbarMenuItem text='Bookmarks' Icon={BookmarkIcon} />
            <LeftbarMenuItem text='Lists' Icon={ClipboardIcon} />
            <LeftbarMenuItem text='Profile' Icon={UserIcon} />
            <LeftbarMenuItem text='More' Icon={DotsCircleHorizontalIcon} />
          </>
        )}
      </div>
      <div className='pt-4'>
        {session ? (
          <button className='w-56 h-12 hidden 2xl:inline-block text-lg  font-medium text-white transition rounded-full bg-sky-400 hover:shadow-md hover:bg-sky-500'>
            Tweet
          </button>
        ) : (
          <button
            onClick={signIn}
            className='w-56 h-12 hidden 2xl:inline-block text-lg  font-medium text-white transition rounded-full bg-sky-400 hover:shadow-md hover:bg-sky-500'
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
}

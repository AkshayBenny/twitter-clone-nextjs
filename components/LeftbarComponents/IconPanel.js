import Image from 'next/image';
import React from 'react';
import LeftbarMenuItem from './LeftbarMenuItem';
import User from './User';
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
export default function IconPanel() {
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
        <LeftbarMenuItem text='Notifications' Icon={BellIcon} />
        <LeftbarMenuItem text='Messages' Icon={InboxIcon} />
        <LeftbarMenuItem text='Bookmarks' Icon={BookmarkIcon} />
        <LeftbarMenuItem text='Lists' Icon={ClipboardIcon} />
        <LeftbarMenuItem text='Profile' Icon={UserIcon} />
        <LeftbarMenuItem text='More' Icon={DotsCircleHorizontalIcon} />
      </div>
      <div className='pt-4'>
        <button className='w-56 h-12 hidden xl:inline-block text-lg  font-medium text-white transition rounded-full bg-sky-400 hover:shadow-md hover:bg-sky-500'>
          Tweet
        </button>
      </div>
    </div>
  );
}

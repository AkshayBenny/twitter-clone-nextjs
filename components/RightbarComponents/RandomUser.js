import React from 'react';

export default function RandomUser({ user }) {
  console.log(user);
  return (
    <div className='flex items-center justify-between py-2 px-4 group cursor-pointer hover:bg-sky-100'>
      <div className='flex items-center space-x-4'>
        <img
          width='40'
          className='rounded-full'
          src={user.picture.thumbnail}
          alt={user.name.first}
        />
        <div className='truncate'>
          <h1 className='truncate font-bold hover:underline text-gray-700'>
            {user.login.username}
          </h1>
          <p className='truncate text-gray-600'>
            {user.name.first} {user.name.last}
          </p>
        </div>
      </div>
      <button className='blue-btn px-3.5 py-1.5 text-sm font-semibold'>
        Follow
      </button>
    </div>
  );
}

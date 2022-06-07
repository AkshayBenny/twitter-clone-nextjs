import React from 'react';

export default function LeftbarMenuItem({ text, Icon, bold }) {
  return (
    <div className='flex 2xl:my-2 items-center space-x-2 justify-center 2xl:justify-start hover-gray px-4 py-3 rounded-full'>
      <Icon className='h-7 text-gray-700' />
      <span
        className={`${bold ? 'font-semibold' : 'font-light'} hidden 2xl:flex`}
      >
        {text}
      </span>
    </div>
  );
}

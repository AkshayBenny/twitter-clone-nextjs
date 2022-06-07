import { SearchIcon } from '@heroicons/react/outline';
import News from './News';
import { useState } from 'react';

export default function Rightbar({ newsResults }) {
  const [number, setNumber] = useState(3);

  const clickHandler = () => {
    setNumber(number + 3);
  };
  return (
    <div className='xl:w-[600px] hidden lg:inline ml-8  space-y-5'>
      <div
        // onSubmit={searchHandler}
        className='w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50'
      >
        <div className='flex items-center p-3 rounded-full  relative'>
          <SearchIcon className='h-5 z-50 text-gray-500' />
          <input
            className='absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100 '
            type='text'
            placeholder='Search Twitter'
          />
        </div>
      </div>
      <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]'>
        <h4 className='font-bold text-xl p-4'>What&apos;s happening?</h4>
        <div>
          {newsResults.slice(0, number).map((news, index) => {
            return <News key={index} news={news} />;
          })}
        </div>
        <button
          onClick={clickHandler}
          className='text-blue-300 pl-4 pb-3 hover:text-blue-400 cursor-pointer transition'
        >
          Show more
        </button>
      </div>
    </div>
  );
}

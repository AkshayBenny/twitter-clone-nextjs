import IconPanel from './IconPanel';
import User from './User';

export default function Leftbar() {
  return (
    <div className='2xl:p-2 w-14 2xl:ml-24 hidden sm:block fixed 2xl:w-fit border-r 2xl:border-0 h-screen 2xl:flex justify-between flex-col 2xl:space-y-6'>
      <IconPanel />
      <div>
        <User />
      </div>
    </div>
  );
}

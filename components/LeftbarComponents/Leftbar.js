import IconPanel from './IconPanel';
import User from './User';

export default function Leftbar() {
  return (
    <div className='xl:p-2 w-14 hidden sm:block fixed xl:w-fit border-r xl:border-0 h-screen xl:flex justify-between flex-col  xl:space-y-6'>
      <IconPanel />
      <div>
        <User />
      </div>
    </div>
  );
}

import IconPanel from './IconPanel';
import User from './User';

export default function Leftbar() {
  return (
    <div className='xl:p-2 w-14 fixed xl:w-auto border-r h-screen xl:flex justify-between flex-col  xl:space-y-6'>
      <IconPanel />
      <div>
        <User />
      </div>
    </div>
  );
}

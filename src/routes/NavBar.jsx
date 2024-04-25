import { Link, Outlet } from 'react-router-dom';
import { Avatar } from '@nextui-org/react';

export default function NavBar() {
  return (
    <>
      <nav className='w-full h-[52px] bg-stone-50 font-IRANSans-Medium flex justify-between items-center px-16'>
        <div className='flex gap-10 items-center'>
          <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
          <ul className='flex gap-8 text-stone-950'>
            <li>
              <Link to='/'>بلیط</Link>
            </li>
            <li>
              <a href='#'>اقامت</a>
            </li>
            <li>
              <a href='#'>تور</a>
            </li>
            <li>
              <a href='#'>ویزا</a>
            </li>
            <li>
              <a href='#'>بیشتر</a>
            </li>
          </ul>
        </div>
        <div className='flex gap-3 items-center'>
          <p className='font-bold'>.MAIR</p>
          <img className='w-12 h-12' src='/public/logo.svg' alt='logo' />
        </div>
      </nav>
      <Outlet />
    </>
  );
}

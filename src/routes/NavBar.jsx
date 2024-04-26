import { Link, Outlet } from 'react-router-dom';
import { Avatar } from '@nextui-org/react';

export default function NavBar() {
  return (
    <>
      <nav className='w-full h-[53px] bg-stone-50 font-AzarMehr flex justify-between items-center px-16'>
        <div className='flex gap-10 items-center'>
          <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' />
          <ul className='flex items-center gap-3 text-stone-950'>
            <li className='w-10 flex justify-center'>
              <Link to='/'>بلیط</Link>
            </li>
            <span className='w-[1.5px] h-7 bg-stone-300 rounded-2xl'></span>
            <li className='w-10 flex justify-center'>
              <a href='#'>اقامت</a>
            </li>
            <span className='w-[1.5px] h-7 bg-stone-300 rounded-2xl'></span>
            <li className='w-10 flex justify-center'>
              <a href='#'>تور</a>
            </li>
            <span className='w-[1px] h-7 bg-stone-300 rounded-2xl'></span>

            <li className='w-10 flex justify-center'>
              <a href='#'>ویزا</a>
            </li>
            <span className='w-[1.5px] h-7 bg-stone-300 rounded-2xl'></span>

            <li className='w-10 flex justify-center'>
              <a href='#'>بیشتر</a>
            </li>
          </ul>
        </div>
        <div className='flex gap-3 items-center'>
          <p className='font-bold pt-1.5 text-lg'>.MAIR</p>
          <img className='w-12 h-12' src='/public/logo.svg' alt='logo' />
        </div>
      </nav>
      <Outlet />
    </>
  );
}

import { Link, Outlet } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <nav className='w-full h-[50px] bg-stone-50 font-IRANSans-Medium flex justify-between items-center px-16'>
        <ul className='flex gap-5 text-stone-950'>
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
        <div>
          <img className='w-12 h-12' src='/public/logo.svg' alt='logo' />
        </div>
      </nav>
      <Outlet />
    </>
  );
}

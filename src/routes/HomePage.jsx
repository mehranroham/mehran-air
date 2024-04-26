import { Outlet } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className='font-AzarMehr w-full min-h-[calc(100vh_-_53px)]'>
      <Outlet />
      <div className='px-16'>
        <div className='flex flex-col mt-24'>
          <p>سایر خدمات مهران ایر</p>
          <div></div>
        </div>
      </div>
    </main>
  );
}

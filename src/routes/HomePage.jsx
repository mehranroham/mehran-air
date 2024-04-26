import { Outlet } from 'react-router-dom';
import Bimeh from '../assets/Bimeh';
import Travel from '../assets/Travel';
import Visa from '../assets/Visa';
import Tour from '../assets/Tour';

export default function HomePage() {
  return (
    <main className='font-AzarMehr w-full min-h-[calc(100vh_-_53px)]'>
      <Outlet />
      <div className='w-[75%] mx-auto'>
        <div className='flex flex-col gap-5 mt-24 mb-10'>
          <p className='font-semibold text-lg'>سایر خدمات مهران ایر</p>
          <div className='flex justify-between border-2 p-6 rounded-lg'>
            <div className='flex gap-3 items-center justify-center '>
              <Travel />
              <p>سفرکارت (سازمانی)</p>
            </div>
            <span className='w-[1px] h-9 bg-stone-300 rounded-2xl'></span>
            <div className='flex gap-3 items-center justify-center'>
              <Bimeh />
              <p>بیمه مسافرتی</p>
            </div>
            <span className='w-[1px] h-9 bg-stone-300 rounded-2xl'></span>
            <div className='flex gap-3 items-center justify-center'>
              <Visa />
              <p>ویزای سفر</p>
            </div>
            <span className='w-[1px] h-9 bg-stone-300 rounded-2xl'></span>
            <div className='flex gap-3 items-center justify-center'>
              <Tour />
              <p>تور گروهی</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

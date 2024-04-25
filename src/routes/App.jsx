import DropDown from '../components/DropDown';
import { IoAirplaneOutline, IoTrainOutline } from 'react-icons/io5';
import { BsAirplaneEngines } from 'react-icons/bs';
import { LuBus } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import AirPlaneSVG from '../assets/AirPlaneSVG';
import CityInput from '../components/CityInput';
import DateDropDown from '../components/DateDropDown';
import { Input } from '@nextui-org/react';
import { useState } from 'react';
import { Button } from '@nextui-org/react';

export default function App() {
  const [coValue, setCoValue] = useState(null);
  const [showBox, setShowBox] = useState(false);

  const coClickHandler = () => {
    setShowBox((prev) => !prev);
  };

  const bigBoxHandler = () => {
    if (showBox) setShowBox(false);
  };

  let cssClass = ({ isActive }) => {
    return isActive
      ? 'flex flex-col gap-2 items-center justify-center border-b-2 border-b-red-500 pb-1'
      : 'flex flex-col gap-2 items-center justify-center';
  };

  return (
    <main className='font-IRANSans-Medium w-full min-h-[calc(100vh_-_52px)]'>
      <div
        onClick={bigBoxHandler}
        className='relative w-full h-[80vh] bg-stone-200'
      >
        <AirPlaneSVG />
        <img
          className='w-full h-full object-none'
          src='/src/assets/bridge.png'
          alt=''
        />
        <div className='absolute flex flex-col gap-7 items-start px-16 py-3 w-[80%] bg-stone-50 top-[60%] right-[50%] translate-x-[50%] rounded-2xl'>
          {/* absolute box */}
          <div className='flex justify-between w-full px-5'>
            <NavLink to='/' className={cssClass}>
              <IoAirplaneOutline className='rotate-[-40deg]' size={45} />
              <p className='text-sm'>پرواز داخلی</p>
            </NavLink>
            <NavLink to='/air' className={cssClass}>
              <BsAirplaneEngines className='rotate-[-40deg] ' size={45} />
              <p className='text-sm'>پرواز خارجی</p>
            </NavLink>
            <NavLink to='/air' className={cssClass}>
              <IoTrainOutline size={45} />
              <p className='text-sm'>قطار</p>
            </NavLink>
            <NavLink to='/air' className={cssClass}>
              <LuBus size={45} />
              <p className='text-sm'>اتوبوس</p>
            </NavLink>
            <NavLink to='/air' className={cssClass}>
              <IoAirplaneOutline size={45} />
              <p className='text-sm'>پرواز داخلی</p>
            </NavLink>
            <NavLink to='/air' className={cssClass}>
              <IoAirplaneOutline size={45} />
              <p className='text-sm'>پرواز داخلی</p>
            </NavLink>
          </div>
          {/* getting information */}
          {/* dropdown */}
          <div>
            <DropDown />
          </div>
          {/* inputs */}
          <div className='w-full flex gap-5 justify-center'>
            <div className='flex'>
              <CityInput placeHolder='مبدا (شهر)' />
              <CityInput placeHolder='مقصد (شهر)' />
            </div>
            {/* date picker */}
            <DateDropDown />
            <div onClick={coClickHandler} className='relative'>
              <Input
                value={coValue}
                onChange={(e) => setCoValue(e.target.value)}
                size='sm'
                variant='bordered'
                className='h-10 w-[150px]'
                type='email'
                label='تعداد مسافران'
              />

              {showBox && (
                <div className='absolute bottom-[110%] bg-white border-2 border-gray-300 w-[220px] rounded-xl p-3 flex flex-col gap-5'>
                  <div className='flex gap-3 text-xs'>
                    <p>بزرگسال (۱۲ سال به بالا)</p>
                  </div>
                  <div className='flex gap-3 text-xs'>
                    <p>بزرگسال (۱۲ سال به بالا)</p>
                  </div>
                  <div className='flex gap-3 text-xs'>
                    <p>بزرگسال (۱۲ سال به بالا)</p>
                  </div>
                </div>
              )}
            </div>
            <Button
              className='w-[200px]'
              radius='sm'
              color='danger'
              variant='ghost'
            >
              جستجو
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

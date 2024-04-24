import { IoAirplaneOutline } from 'react-icons/io5';
import { BsAirplaneEngines } from 'react-icons/bs';
import { IoTrainOutline } from 'react-icons/io5';
import { LuBus } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import AirPlaneSVG from '../assets/AirPlaneSVG';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import CityInput from '../components/CityInput';

export default function App() {
  let cssClass = ({ isActive }) => {
    return isActive
      ? 'flex flex-col gap-2 items-center justify-center border-b-2 border-b-red-500 pb-1'
      : 'flex flex-col gap-2 items-center justify-center';
  };

  return (
    <main className='font-IRANSans-Medium w-full min-h-[calc(100vh_-_50px)]'>
      <div className='relative w-full h-[80vh] bg-stone-200'>
        <AirPlaneSVG />
        <img
          className='w-full h-full object-none'
          src='/src/assets/bridge.png'
          alt=''
        />
        <div className='absolute flex flex-col gap-7 items-start px-16 pt-3 w-[80%] bg-stone-50 h-[300px] top-[60%] right-[50%] translate-x-[50%] rounded-2xl'>
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
          <div>
            <Dropdown>
              <DropdownTrigger>
                <Button variant='bordered'>یک طرفه</Button>
              </DropdownTrigger>
              <DropdownMenu
                className='font-IRANSans-Medium'
                aria-label='Static Actions'
              >
                <DropdownItem key='one-way'>یک طرفه</DropdownItem>
                <DropdownItem key='with-back'>رفت و برگشت</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className='flex gap-4'>
            <CityInput placeHolder='مبدا (شهر)' />
            <CityInput placeHolder='مقصد (شهر)' />
          </div>
        </div>
      </div>
    </main>
  );
}

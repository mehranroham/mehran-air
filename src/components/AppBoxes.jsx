import { IoAirplaneOutline, IoTrainOutline } from 'react-icons/io5';
import { BsAirplaneEngines } from 'react-icons/bs';
import { LuHotel } from 'react-icons/lu';
import { LuBus } from 'react-icons/lu';
import { MdOutlineVilla } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { AppContextApi } from '../context/AppContext';
import { useContext } from 'react';

export default function AppBoxes() {
  const { cssClass } = useContext(AppContextApi);

  return (
    <div className='flex justify-between w-full px-5'>
      <NavLink to='/' className={cssClass}>
        <IoAirplaneOutline className='rotate-[-40deg]' size={35} />
        <p className='text-sm'>پرواز داخلی</p>
      </NavLink>
      <NavLink to='/air' className={cssClass}>
        <BsAirplaneEngines className='rotate-[-40deg] ' size={35} />
        <p className='text-sm'>پرواز خارجی</p>
      </NavLink>
      <NavLink to='/air' className={cssClass}>
        <IoTrainOutline size={35} />
        <p className='text-sm'>قطار</p>
      </NavLink>
      <NavLink to='/air' className={cssClass}>
        <LuBus size={35} />
        <p className='text-sm'>اتوبوس</p>
      </NavLink>
      <NavLink to='/air' className={cssClass}>
        <LuHotel size={35} />
        <p className='text-sm'>هتل</p>
      </NavLink>
      <NavLink to='/air' className={cssClass}>
        <MdOutlineVilla size={35} />
        <p className='text-sm'>ویلا و اقامتگاه</p>
      </NavLink>
    </div>
  );
}

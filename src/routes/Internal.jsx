import { AppContextApi } from '../context/AppContext';
import { useContext } from 'react';
import AirPlaneSVG from '../assets/AirPlaneSVG';
import OrderingBox from '../components/OrderingBox';

export default function Internal() {
  const { bigBoxHandler } = useContext(AppContextApi);

  return (
    <>
      <div
        onClick={bigBoxHandler}
        className='relative w-full h-[80vh] bg-gray-200'
      >
        <AirPlaneSVG />
        <img
          className='w-full h-full object-none'
          src='/src/assets/bridge.png'
          alt='airplane'
        />
        {/* OrderingBox */}
        <OrderingBox />
      </div>
    </>
  );
}

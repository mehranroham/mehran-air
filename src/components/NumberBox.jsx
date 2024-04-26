import { useContext } from 'react';
import { AppContextApi } from '../context/AppContext';

export default function NumberBox() {
  const { orderingData, boxPlusHandler, boxMinusHandler } =
    useContext(AppContextApi);

  return (
    <>
      <div className='absolute bottom-[110%] bg-white border-2 border-gray-300 w-[255px] rounded-xl p-3 flex flex-col gap-5'>
        <div className='flex gap-3 text-xs items-center'>
          <p className='w-[120px]'>بزرگسال (۱۲ سال به بالا)</p>
          <div className='flex gap-1 items-center'>
            <button
              onClick={() => boxPlusHandler('adults')}
              className='text-sm rounded-md pt-[2px] bg-rose-400 text-gray-200 w-5 h-5 flex justify-center items-center z-30'
            >
              +
            </button>
            <button
              onClick={() => boxMinusHandler('adults')}
              className='text-sm rounded-md pt-[2px] bg-rose-400 text-gray-200 w-5 h-5 flex justify-center items-center'
            >
              -
            </button>
          </div>
          <p>{orderingData.customer.adults} عدد</p>
        </div>
        <div className='flex gap-3 text-xs'>
          <p className='w-[120px]'>کودک (۲ تا ۱۲ سال)</p>
          <div className='flex gap-1 items-center'>
            <button
              onClick={() => boxPlusHandler('teenagers')}
              className='text-sm rounded-md pt-[2px] bg-rose-400 text-gray-200 w-5 h-5 flex justify-center items-center'
            >
              +
            </button>
            <button
              onClick={() => boxMinusHandler('teenagers')}
              className='text-sm rounded-md pt-[2px] bg-rose-400 text-gray-200 w-5 h-5 flex justify-center items-center'
            >
              -
            </button>
          </div>
          <p>{orderingData.customer.teenagers} عدد</p>
        </div>
        <div className='flex gap-3 text-xs'>
          <p className='w-[120px]'>نوزاد (10 روز تا 2 سال)</p>
          <div className='flex gap-1 items-center'>
            <button
              onClick={() => boxPlusHandler('childs')}
              className='text-sm rounded-md pt-[2px] bg-rose-400 text-gray-200 w-5 h-5 flex justify-center items-center'
            >
              +
            </button>
            <button
              onClick={() => boxMinusHandler('childs')}
              className='text-sm rounded-md pt-[2px] bg-rose-400 text-gray-200 w-5 h-5 flex justify-center items-center'
            >
              -
            </button>
          </div>
          <p>{orderingData.customer.childs} عدد</p>
        </div>
      </div>
    </>
  );
}

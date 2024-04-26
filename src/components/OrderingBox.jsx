import DropDown from './DropDown';
import AppBoxes from './AppBoxes';
import CityInput from './CityInput';
import DateDropDown from './DateDropDown';
import { Button } from '@nextui-org/react';
import { AppContextApi } from '../context/AppContext';
import { useContext } from 'react';
import NumberBox from '../components/NumberBox';

export default function OrderingBox() {
  const { showNumberBox, coClickHandler, orderingData } =
    useContext(AppContextApi);

  const onSearchHandler = () => {
    if (
      orderingData.startCity !== null &&
      orderingData.endCity !== null &&
      orderingData.startDate !== null &&
      orderingData.endDate !== null
    ) {
      alert('everything is right');
    } else {
      alert('fill the inputs');
    }
  };

  return (
    <div className='absolute flex flex-col gap-7 items-start px-10 py-3 w-[75%] bg-gray-50 top-[400px] right-[50%] translate-x-[50%] rounded-2xl'>
      {/* absolute box */}
      <AppBoxes />
      {/* getting information */}
      {/* dropdown */}
      <div>
        <DropDown />
      </div>
      {/* inputs */}
      <div className='w-full flex gap-5'>
        <div className='flex'>
          <CityInput value='start' placeHolder='مبدا (شهر)' />
          <CityInput value='end' placeHolder='مقصد (شهر)' />
        </div>
        {/* date picker */}
        <DateDropDown />
        {/* numbers of customers */}
        <div className='relative'>
          <Button
            onClick={coClickHandler}
            size='sm'
            variant='bordered'
            className='h-10 w-[130px]'
            type='text'
          >
            {orderingData.customer.adults +
              orderingData.customer.teenagers +
              orderingData.customer.childs +
              ' مسافر'}
          </Button>
          {showNumberBox && <NumberBox />}
          {/* search */}
        </div>
        <Button
          onClick={onSearchHandler}
          className='w-[180px]'
          radius='sm'
          color='danger'
          variant='ghost'
        >
          جستجو
        </Button>
      </div>
    </div>
  );
}

import { Dropdown, DropdownTrigger, Button } from '@nextui-org/react';
import BackAndForth from './BackAndForth';
import Forth from './Forth';
import { useContext, useEffect } from 'react';
import { AppContextApi } from '../context/AppContext';

export default function DateDropDown() {
  const {
    selectedWay,
    showDate,
    dateClickHandler,
    orderingData,
    SetOrderingData,
  } = useContext(AppContextApi);

  useEffect(() => {
    SetOrderingData({
      onChange: false,
      startCity: null,
      endCity: null,
      startDate: null,
      endDate: null,
      customer: {
        adults: 1,
        teenagers: 0,
        childs: 0,
      },
    });
  }, [selectedWay]);

  let start;
  let end;

  if (orderingData.startDate) {
    start = new Date(
      `${orderingData.startDate.year} / ${orderingData.startDate.month} / ${orderingData.startDate.day}`
    ).toLocaleDateString('fa-IR');
  }

  if (orderingData.endDate) {
    end = new Date(
      `${orderingData.endDate.year} / ${orderingData.endDate.month} / ${orderingData.endDate.day}`
    ).toLocaleDateString('fa-IR');
  }

  if (selectedWay !== 'رفت و برگشت') {
    return (
      <>
        <div className='flex'>
          <Button onClick={dateClickHandler} radius='sm' variant='bordered'>
            {orderingData.startDate ? start : 'تاریخ رفت'}
          </Button>
          <Button
            className='cursor-not-allowed'
            disabled
            radius='sm'
            variant='bordered'
          >
            -
          </Button>
        </div>
        {showDate && (
          <div className='absolute bottom-[22%] right-[41%]'>
            <Forth />
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className='flex'>
        <Button onClick={dateClickHandler} radius='sm' variant='bordered'>
          {orderingData.startDate ? start : 'تاریخ رفت'}
        </Button>
        <Button onClick={dateClickHandler} radius='sm' variant='bordered'>
          {orderingData.endDate ? end : 'تاریخ برگشت'}
        </Button>
      </div>

      {showDate && (
        <div className='absolute bottom-[20%] right-[41%]'>
          <BackAndForth />
        </div>
      )}
    </>
  );
}

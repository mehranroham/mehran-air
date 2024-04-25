import { Dropdown, DropdownTrigger, Button } from '@nextui-org/react';
import BackAndForth from './BackAndForth';
import Forth from './Forth';
import { useContext } from 'react';
import { AppContextApi } from '../context/AppContext';

export default function DateDropDown() {
  const { selectedWay } = useContext(AppContextApi);

  if (selectedWay !== 'رفت و برگشت') {
    return (
      <>
        <Dropdown>
          <DropdownTrigger className='w-36'>
            <Button radius='sm' variant='bordered'>
              تاریخ رفت
            </Button>
          </DropdownTrigger>
          <div className='absolute bottom-[12%] right-[41%]'>
            <Forth />
          </div>
        </Dropdown>
      </>
    );
  }

  return (
    <>
      <Dropdown>
        <DropdownTrigger className='w-36'>
          <Button radius='sm' variant='bordered'>
            تاریخ رفت و برگشت
          </Button>
        </DropdownTrigger>
        <div className='absolute bottom-[12%] right-[41%]'>
          <BackAndForth />
        </div>
      </Dropdown>
    </>
  );
}

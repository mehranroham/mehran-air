import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import { useContext } from 'react';
import { AppContextApi } from '../context/AppContext';

export default function DropDown() {
  const { selectedWay, setSelectedWay } = useContext(AppContextApi);

  return (
    <Dropdown>
      <DropdownTrigger className='h-9'>
        <Button variant='bordered' className='capitalize'>
          {selectedWay}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        className='font-IRANSans-Medium '
        aria-label='Single selection example'
        variant='flat'
        disallowEmptySelection
        selectionMode='single'
        onSelectionChange={(e) => setSelectedWay(e.currentKey)}
      >
        <DropdownItem key='یک طرفه'>یک طرفه</DropdownItem>
        <DropdownItem key='رفت و برگشت'>رفت و برگشت</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

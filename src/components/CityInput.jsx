import { useContext } from 'react';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import { AppContextApi } from '../context/AppContext';

export default function App({ placeHolder }) {
  const { cities } = useContext(AppContextApi);

  return (
    <div className='w-52 flex flex-col gap-4'>
      <Autocomplete
        variant='bordered'
        defaultItems={cities}
        label={placeHolder}
        className='max-w-xs'
        size='sm'
        onSelectionChange={(event) => console.log(event)}
      >
        {(item) => (
          <AutocompleteItem className='font-IRANSans-Medium' key={item.value}>
            {item.label.slice(0, -3)}
          </AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
}

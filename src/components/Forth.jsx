import { useContext } from 'react';
import { Calendar } from '@nextui-org/react';
import { I18nProvider } from '@react-aria/i18n';
import { AppContextApi } from '../context/AppContext';
import { today, getLocalTimeZone } from '@internationalized/date';

export default function App() {
  const { setDateHandler } = useContext(AppContextApi);

  return (
    <div className='font-IRANSans-Medium'>
      <I18nProvider locale='fa-IR-u-ca-persian'>
        <Calendar
          defaultValue={today(getLocalTimeZone())}
          onChange={(e) => setDateHandler(e, 'oneWay')}
          aria-label='Date (International Calendar)'
        />
      </I18nProvider>
    </div>
  );
}

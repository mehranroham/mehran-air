import { useContext } from 'react';
import { RangeCalendar } from '@nextui-org/react';
import { I18nProvider } from '@react-aria/i18n';
import { AppContextApi } from '../context/AppContext';
import { today, getLocalTimeZone } from '@internationalized/date';

export default function BackAndForth() {
  const { setDateHandler } = useContext(AppContextApi);

  return (
    <div className='font-IRANSans-Medium'>
      <I18nProvider locale='fa-IR-u-ca-persian'>
        <RangeCalendar
          defaultValue={{
            start: today(getLocalTimeZone()),
            end: today(getLocalTimeZone()).add({ days: 3 }),
          }}
          onChange={(e) => setDateHandler(e, 'backAndForth')}
          aria-label='Date (International RangeCalendar)'
        />
      </I18nProvider>
    </div>
  );
}

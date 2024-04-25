import React from 'react';
import { RangeCalendar } from '@nextui-org/react';
import { I18nProvider } from '@react-aria/i18n';

export default function BackAndForth() {
  return (
    <div lang='fa' dir='ltr' className='font-IRANSans-Medium'>
      <I18nProvider locale='fa-IR-u-ca-persian'>
        <RangeCalendar
          onChange={(e) =>
            console.log(
              e.start.year,
              e.start.month,
              e.start.day,
              e.end.year,
              e.end.month,
              e.end.day
            )
          }
          aria-label='Date (International RangeCalendar)'
        />
      </I18nProvider>
    </div>
  );
}

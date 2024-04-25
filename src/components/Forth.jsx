import React from 'react';
import { Calendar } from '@nextui-org/react';
import { I18nProvider } from '@react-aria/i18n';

export default function App() {
  return (
    <div lang='fa' dir='ltr' className='font-IRANSans-Medium'>
      <I18nProvider locale='fa-IR-u-ca-persian'>
        <Calendar
          onChange={(e) => console.log(e.year, e.month, e.day)}
          aria-label='Date (International Calendar)'
        />
      </I18nProvider>
    </div>
  );
}

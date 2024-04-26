import { createContext, useEffect, useState } from 'react';
import { cities } from '../../data';

export const AppContextApi = createContext();

export default function AppContext({ children }) {
  let cssClass = ({ isActive }) => {
    return isActive
      ? 'flex flex-col gap-2 items-center justify-center border-b-2 border-b-red-500 pb-1'
      : 'flex flex-col gap-2 items-center justify-center';
  };

  const [selectedWay, setSelectedWay] = useState('یک طرفه');
  const [showNumberBox, setShowNumberBox] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const coClickHandler = () => {
    setShowNumberBox((prev) => !prev);
  };

  const dateClickHandler = () => {
    setShowDate((prev) => !prev);
  };

  const bigBoxHandler = () => {
    if (showDate) setShowDate(false);
    if (showNumberBox) setShowNumberBox(false);
  };

  const [orderingData, SetOrderingData] = useState({
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

  // DateDropDown component has a reset of orderingData in useffect

  const setDateHandler = (event, value) => {
    if (value === 'oneWay') {
      SetOrderingData((prev) => {
        return {
          ...prev,
          startDate: {
            year: event.year,
            month: event.month,
            day: event.day,
          },
          endDate: null,
        };
      });
    } else if (value === 'backAndForth') {
      SetOrderingData((prev) => {
        return {
          ...prev,
          startDate: {
            year: event.start.year,
            month: event.start.month,
            day: event.start.day,
          },
          endDate: {
            year: event.end.year,
            month: event.end.month,
            day: event.end.day,
          },
        };
      });
    }
  };

  const setCityHandler = (event, value) => {
    if (value === 'start') {
      SetOrderingData((prev) => {
        return { ...prev, startCity: event };
      });
    } else if (value === 'end') {
      SetOrderingData((prev) => {
        return { ...prev, endCity: event };
      });
    }
  };

  const boxPlusHandler = (item) => {
    SetOrderingData((prev) => {
      return { ...prev, onChange: true };
    });
    SetOrderingData((prev) => {
      return {
        ...prev,
        customer: { ...prev.customer, [item]: prev.customer[item] + 1 },
      };
    });
  };

  const boxMinusHandler = (item) => {
    SetOrderingData((prev) => {
      return { ...prev, onChange: true };
    });
    if (
      orderingData.customer[item] >= 1 &&
      orderingData.customer.adults +
        orderingData.customer.teenagers +
        orderingData.customer.childs >
        1
    ) {
      SetOrderingData((prev) => {
        return {
          ...prev,
          customer: { ...prev.customer, [item]: prev.customer[item] - 1 },
        };
      });
    } else {
      SetOrderingData((prev) => {
        return {
          ...prev,
          customer: { ...prev.customer, [item]: prev.customer[item] },
        };
      });
    }
  };

  useEffect(() => {
    if (orderingData.onChange) {
      setShowNumberBox(true);
    }
  }, [orderingData.customer]);

  const ctxValue = {
    cities,
    selectedWay,
    setSelectedWay,
    coClickHandler,
    bigBoxHandler,
    cssClass,
    setCityHandler,
    setDateHandler,
    showDate,
    showNumberBox,
    dateClickHandler,
    orderingData,
    SetOrderingData,
    boxPlusHandler,
    boxMinusHandler,
  };

  return (
    <AppContextApi.Provider value={ctxValue}>{children}</AppContextApi.Provider>
  );
}

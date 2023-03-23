import React, { useState, useEffect } from 'react';
import moment from 'moment';

import DayOfWeek from './DayOfWeek';
import DayOfMonth from './DayOfMonth';
import { CalendarTypes } from '../types';
import { weekDays, months, getFirstWeekDayOfMonth, getDaysInMonth, getSplitDate } from '../utils';
import styles from '../styles/calendar.module.css';

export default function Calendar({ date }: CalendarTypes) {

  // this state is used to handle what to render.
  // true -> render calendar
  // false -> render invalid date
  // null -> show loading
  const [isValidDate, setIsValidDate] = useState<any>(null);

  useEffect(() => {
    setIsValidDate(moment(date, 'DD/MM/YYYY', true).isValid());
  }, [date]);

  const splitDate = getSplitDate(date);
  const firstWeekDayOfMonth: number = getFirstWeekDayOfMonth(date);
  const daysInMonth: string[] = getDaysInMonth(date, firstWeekDayOfMonth);

  return (
    <div className={styles.calendarContainer} id='calendarContainer'>
      {
        isValidDate === null ?
          <h3 className={styles.textStyle}>Loading...</h3> :
          (!isValidDate ?
            <h3 className={styles.textStyle}>Invalid Date</h3> :
            <>
              <label className={styles.textStyle}>{months[splitDate.month - 1]} {splitDate.year}</label>
              <div className={styles.weekDaysContainer}>
                {
                  weekDays.map((weekDay, index) => {
                    return <DayOfWeek key={index} dayOfWeek={weekDay} />
                  })
                }
              </div>
              <div className={styles.monthDaysContainer}>
                {
                  daysInMonth.map((dayOfMonth, index) => {
                    return (
                      <DayOfMonth
                        key={index}
                        dayOfMonth={dayOfMonth}
                        isToday={dayOfMonth.length > 0 ? splitDate.day === Number(dayOfMonth) : false}
                      />
                    )
                  })
                }
              </div>
            </>
          )
      }
    </div>
  )
}

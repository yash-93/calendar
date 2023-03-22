import React from 'react'

import { DayOfMonthTypes } from '../types';
import styles from '../styles/dayOfMonth.module.css';

export default function DayOfMonth({ dayOfMonth, isToday }: DayOfMonthTypes) {

  return (
    <div
      className={`${styles.dayOfMonthBlock} ${isToday && styles.highlight}`}
    >
      {dayOfMonth}
    </div>
  )
}

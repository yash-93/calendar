import React from 'react';

import { DayOfWeekTypes } from '../types';
import styles from '../styles/dayOfWeek.module.css';

export default function DayOfWeek({ dayOfWeek }: DayOfWeekTypes) {
  return (
    <div
      className={`${styles.dayOfWeekBlock} ${styles.textStyle}`}
    >
      {dayOfWeek}
    </div>
  )
}

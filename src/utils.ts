// 1 = Jan, 2 = Feb, ..., 12 = Dec
export const monthsHaving31Days = [1, 3, 5, 7, 8, 10, 12];

export const monthsHaving30Days = [4, 6, 9, 11];

export const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Returns true if it is leap year else false
export const isLeapYear = (year: number) => {
    return (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0));
}

// Returns an object with year/month/day after extracting from provided date
export const getSplitDate = (date: string) => {
    const splitDate = date.split('/');
    return {
        year: Number(splitDate[2]),
        month: Number(splitDate[1]),
        day: Number(splitDate[0])
    }
}

// returns what will be the week day on 1st of that month
export const getFirstWeekDayOfMonth = (date: string) => {
    const splitDate = getSplitDate(date);
    const newDate = new Date(splitDate.year, splitDate.month - 1, 1);
    return newDate.getDay();
}

// Returns an array that will be used to render days of month in the calendar
export const getDaysInMonth = (date: string, firstWeekDayOfMonth: number) => {
    let daysInMonth: string[] = [];
    const splitDate = getSplitDate(date);
    const startingInvalidDaysCount = firstWeekDayOfMonth;
    const validDaysCount = splitDate.month === 2 ? (isLeapYear(splitDate.year) ? 29 : 28) : ((splitDate.month in monthsHaving30Days) ? 30 : 31)
    let endingInvalidDaysCount = (42 - (startingInvalidDaysCount + validDaysCount));
    endingInvalidDaysCount = endingInvalidDaysCount > 6 ? endingInvalidDaysCount - 7 : endingInvalidDaysCount;
    for (let invalidDay = 1; invalidDay <= startingInvalidDaysCount; invalidDay++) daysInMonth.push('');
    for (let validDay = 1; validDay <= validDaysCount; validDay++) daysInMonth.push(`${validDay}`);
    for (let invalidDay = 1; invalidDay <= endingInvalidDaysCount; invalidDay++) daysInMonth.push('');
    return daysInMonth;
}

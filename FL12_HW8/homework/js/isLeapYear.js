function isLeapYear(date) {
  let fullDate = new Date(date).getFullYear();
  let leapYear = new Date(fullDate, 1, 29).getDate() === 29;

  if(isNaN(fullDate)) {
    return 'Invalid data'
  }
  return leapYear ? `${fullDate} is a leap year` : `${fullDate} is not a leap year`;
}

isLeapYear('2020-01-01:00:00:00');
isLeapYear('2020-01-01:00:00:00777');
isLeapYear('2021-01-15:13:00:00');
isLeapYear('2200-01-15:13:00:00');
isLeapYear(1213131313135465656654564646542132132131);

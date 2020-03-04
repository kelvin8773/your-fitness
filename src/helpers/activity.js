import { differenceInCalendarDays } from 'date-fns';

export const getFinish = (goal, finish) => Math.floor((finish / goal) * 100);

export const getDateTitle = date => {
  const daysDiff = differenceInCalendarDays(new Date(), new Date(date));

  switch (daysDiff) {
    case 0:
      return 'Today';
    case 1:
      return 'Yesterday';
    case 2:
      return 'Two days ago';
    default:
      return 'Few days ago';
  }
};

export const getColor = finish => {
  if (finish >= 100) {
    return '#97e492';
  } if (finish >= 60) {
    return '#42b5e8';
  }
  return '#e846a7';
};

import React from 'react';

export const ACTIVITY_TYPE = [
  'walking',
  'running',
  'cycling',
  'exercise',
  'swimming',
];

export const ACTIVITY_UNITS = {
  walking: 'steps',
  running: 'km',
  cycling: 'km',
  exercise: 'mins',
  swimming: 'm',
};

export const ACTIVITY_ACT = {
  walking: 'walk',
  running: 'run',
  cycling: 'bike',
  exercise: 'workout',
  swimming: 'swim',
};

export const ACTIVITY_UNITS_LONG = {
  walking: 'steps',
  running: 'kilometers',
  cycling: 'kilometers',
  exercise: 'minutes',
  swimming: 'meters',
};

export const ACTIVITY_CHANGE_VALUES = {
  walking: 500,
  running: 1,
  cycling: 5,
  exercise: 5,
  swimming: 50,
};

export const ACTIVITY_ICONS = activity => {
  switch (activity) {
    case 'walking':
      return (<i className="fas fa-walking fa-2x" />);
    case 'running':
      return (<i className="fas fa-running fa-2x" />);
    case 'cycling':
      return (<i className="fas fa-biking fa-2x" />);
    case 'exercise':
      return (<i className="fas fa-dumbbell fa-2x" />);
    case 'swimming':
      return (<i className="fas fa-swimmer fa-2x" />);
    default:
      return (<i className="fas fa-walking fa-2x" />);
  }
};

import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  ACTIVITY_UNITS,
  ACTIVITY_ICONS,
} from '../../../helpers/constant';
import { formatDate, formatTime } from '../../../helpers/index';

const ActivitiesHomePage = () => {
  const { activities } = useSelector(state => state);
  const { goals } = useSelector(state => state.status);
  const reverseActivities = [...activities].reverse();

  const calDailyGoal = activity => {
    const findGoal = goals.find(goal => goal.kind === activity.kind);
    return Math.floor((activity.amount / findGoal.amount) * 100);
  };

  const getDateTitle = (date) => {
    const timeDiff = new Date() - new Date(date);

    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

    switch (daysDiff) {
      case 0:
        return 'Today';
      case 1:
        return 'Yesterday';
      case 2:
        return "Two days ago";
      default:
        return "Few days ago";
    }
  };

  const getColor = (finish) => {
    if (finish >= 100) {
      return '#97e492';
    } else if (finish >= 60) {
      return '#42b5e8';
    } else {
      return '#e846a7';
    }
  };

  let dateTitle;
  let lastTitle;


  return (
    <div className="records-page">
      {
        reverseActivities.map(activity => {
          const dailyGoal = calDailyGoal(activity);
          const circleColor = getColor(dailyGoal);

          const { id, kind, amount, updated_at } = activity;
          const activityDate = formatDate(updated_at);
          const activityTime = formatTime(updated_at);

          const tempTitle = getDateTitle(updated_at);
          dateTitle = (lastTitle === tempTitle || lastTitle === 'Few days ago')
            ? null : tempTitle;
          if (dateTitle) lastTitle = dateTitle;

          return (
            <div key={id + kind} className="activity-record">
              {dateTitle ?
                (<div className="activity-date-title">
                  {dateTitle}
                </div>) : ''
              }
              <div className="activity-data">
                <div className="daily-goal">
                  <div className="goal-progress">
                    <CircularProgressbar
                      value={dailyGoal}
                      text={`${dailyGoal}%`}
                      strokeWidth={7}
                      styles={buildStyles({
                        strokeLinecap: 'round',
                        textSize: '23px',
                        pathColor: `${circleColor}`,
                        textColor: '#8696a6',
                      })}
                    />
                  </div>
                  <div className="date">
                    <p>
                      {activityDate}
                    </p>

                    {activityTime}
                  </div>
                </div>

                <div className="activity-details">
                  <div className="icon">
                    {ACTIVITY_ICONS(kind)}
                  </div>
                  <div className="amount">
                    {amount}
                    <span>{ACTIVITY_UNITS[kind]}</span>
                  </div>
                </div>

                <i className="fas fa-chevron-right fa-2x right-btn" />
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default ActivitiesHomePage;

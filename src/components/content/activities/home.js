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

  return (
    <div className="records-page">
      {
        reverseActivities.map(activity => {
          const dailyGoal = calDailyGoal(activity);
          const { id, kind, amount, updated_at } = activity;
          const activityDate = formatDate(updated_at);
          const activityTime = formatTime(updated_at);

          let circleColor;
          if (dailyGoal >= 100) {
            circleColor = '#97e492';
          } else if (dailyGoal >= 60) {
            circleColor = '#42b5e8';
          } else {
            circleColor = '#e846a7';
          }

          return (
            <div key={id + kind} className="activity-record">
              <div className="activity-date-title">
                {activityDate}
              </div>
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

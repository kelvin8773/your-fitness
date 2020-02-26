import React from 'react';
import { useSelector } from 'react-redux';
import {
  ACTIVITY_UNITS,
  ACTIVITY_ICONS,
} from '../../helpers/constant';

const RecordsPage = () => {
  const activities = useSelector(state => state.activities);
  const goals = useSelector(state => state.status.goals);

  const calDailyGoal = activity => {
    const findGoal = goals.find(goal => goal.type === activity.type);
    return Math.floor((activity.amount / findGoal.amount) * 100);
  };

  return (
    <div className="records-page">
      {
        activities.map(activity => {
          const dailyGoal = calDailyGoal(activity);
          return (
            <div key={activity.id} className="activity-record">
              <div className="activity-date-title">
                {activity.date}
              </div>
              <div className="activity-data">
                <div className="daily-goal">
                  <div className="progress">
                    <div className="progress-circle" data-progress={dailyGoal} />
                  </div>
                  <div className="date">
                    {activity.date}
                  </div>
                </div>

                <div className="activity-details">
                  <div className="icon">
                    {ACTIVITY_ICONS(activity.type)}
                  </div>
                  <div className="amount">
                    {activity.amount}
                    <span>{ACTIVITY_UNITS[activity.type]}</span>
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

export default RecordsPage;

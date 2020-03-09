import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { lightFormat } from 'date-fns';

import {
  ACTIVITY_UNITS,
  ACTIVITY_ICONS,
} from '../../../helpers/constant';
import { formatDate } from '../../../helpers/index';
import { setCurrentPage, setCurrentActivity } from '../../../slices/statusSlice';
import { getFinish, getDateTitle, getColor } from '../../../helpers/activity';

const ActivitiesHomePage = () => {
  const dispatch = useDispatch();
  const { activities } = useSelector(state => state);
  const { goals } = useSelector(state => state.status);
  const reverseActivities = [...activities].reverse();

  let dateTitle;
  let lastTitle;

  return (
    <div className="activities-page">
      {
        reverseActivities.map(activity => {
          const goal = goals.find(g => g.kind === activity.kind);
          const finishing = getFinish(goal.amount, activity.amount);
          const circleColor = getColor(finishing);

          const {
            id, kind, amount,
          } = activity;
          const createdTime = activity.created_at;
          const activityDate = formatDate(createdTime);
          const activityTime = lightFormat(new Date(createdTime), 'hh:mm aaaa');

          const temp = getDateTitle(createdTime);
          dateTitle = (lastTitle === temp || lastTitle === 'Few days ago')
            ? null : temp;
          if (dateTitle) lastTitle = dateTitle;

          return (
            <div key={id + kind} className="activity-record">
              {dateTitle
                ? (
                  <div className="activity-date-title">
                    {dateTitle}
                  </div>
                ) : ''}
              <div className="activity-data">
                <div className="daily-goal">
                  <div className="goal-progress">
                    <CircularProgressbar
                      value={finishing}
                      text={`${finishing}%`}
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

                <button
                  type="button"
                  className="right-btn"
                  onClick={() => {
                    dispatch(setCurrentActivity(activity));
                    dispatch(setCurrentPage('edit activity'));
                  }}
                >
                  <i className="fas fa-chevron-right fa-2x" />
                </button>

              </div>
            </div>
          );
        })
      }
      {activities.length > 5 ? (<div className="more-sign"> More ... </div>) : ''}
    </div>
  );
};

export default ActivitiesHomePage;

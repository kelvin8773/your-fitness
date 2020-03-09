import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { lightFormat } from 'date-fns';

import {
  ACTIVITY_CHANGE_VALUES,
  ACTIVITY_ICONS,
} from '../../../helpers/constant';
import {
  updateActivity,
  deleteActivity,
  updateActivities,
  fetchActivities,
} from '../../../slices/activitiesSlice';
import { setCurrentPage } from '../../../slices/statusSlice';
import { getFinish, getColor } from '../../../helpers/activity';
import { formatDate } from '../../../helpers/index';

const EditActivity = () => {
  const dispatch = useDispatch();
  const { currentActivity, goals } = useSelector(state => state.status);

  const [inputAmount, setInputAmount] = useState(currentActivity.amount);
  const changeAmount = ACTIVITY_CHANGE_VALUES[currentActivity.kind];

  const goal = goals.find(g => g.kind === currentActivity.kind);
  const finishing = getFinish(goal.amount, currentActivity.amount);
  const circleColor = getColor(finishing);
  const activityDate = formatDate(currentActivity.updated_at, 'L');
  const activityTime = lightFormat(new Date(currentActivity.updated_at), 'hh:mm aaaa');

  const handleChange = activity => {
    const updatedActivity = { ...activity, amount: inputAmount };
    updateActivity(updatedActivity)
      .then(response => {
        if (response) {
          fetchActivities(activity.user_id)
            .then(response => {
              dispatch(updateActivities(response));
            });
          dispatch(setCurrentPage('activities'));
        }
      });
  };

  const handleDelete = activity => {
    deleteActivity(activity)
      .then(response => {
        if (response) {
          fetchActivities(activity.user_id)
            .then(response => {
              dispatch(updateActivities(response));
            });
          dispatch(setCurrentPage('activities'));
        }
      });
  };

  return (
    <div className="activity-page text-center">
      <div className="activity-title">
        <h2>{activityDate}</h2>
        <p>
          {activityTime}
        </p>
      </div>

      <div className="activity-logo">
        {ACTIVITY_ICONS(currentActivity.kind)}
      </div>

      <div
        className="activity-progress"
        style={{ width: '45%' }}
      >
        <CircularProgressbar
          value={finishing}
          text={`${finishing}%`}
          strokeWidth={12}
          styles={buildStyles({
            strokeLinecap: 'round',
            textSize: '21px',
            pathColor: `${circleColor}`,
            textColor: '#8696a6',
          })}
        />
      </div>

      <form
        className="edit-activity-form"
        action="submit"
        onSubmit={e => {
          e.preventDefault();
          handleChange(currentActivity);
        }}
      >
        <div className="input-area">
          <button
            type="button"
            className="btn"
            onClick={() => setInputAmount(inputAmount + changeAmount)}
          >
            +
          </button>
          <input
            type="number"
            name="amount"
            value={inputAmount}
            min="1"
            onChange={e => setInputAmount(parseInt(e.target.value, 10))}
          />
          <button
            type="button"
            className="btn"
            onClick={() => setInputAmount(inputAmount - changeAmount)}
          >
            -
          </button>
        </div>

        <button type="submit" className="btn"> Save</button>
      </form>

      <button
        className="delete-btn"
        type="button"
        onClick={() => handleDelete(currentActivity)}
      >
        Remove This Record
      </button>

    </div>
  );
};

export default EditActivity;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { createActivity, fetchActivities, updateActivities } from '../../../slices/activitiesSlice';
import { setCurrentPage } from '../../../slices/statusSlice';
// import { makeActivityID, formatDate } from '../../../helpers/index';

import {
  ACTIVITY_ICONS,
  ACTIVITY_UNITS,
  ACTIVITY_ACT,
  ACTIVITY_UNITS_LONG,
  ACTIVITY_CHANGE_VALUES,
} from '../../../helpers/constant';

const AddActivity = ({ activity }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.status);
  const [inputAmount, setInputAmount] = useState(0);
  const changeAmount = ACTIVITY_CHANGE_VALUES[activity];

  const handleSubmit = e => {
    e.preventDefault();

    createActivity({
      kind: activity,
      amount: inputAmount,
      user_id: currentUser.id,
    }).then(response => {
      if (response) {
        fetchActivities(currentUser.id)
          .then(response => {
            dispatch(updateActivities(response));
          });
      }
    });

    dispatch(setCurrentPage('Add Activities'));
  };

  return (
    <div className="add-activity">
      <div className="activity-logo">
        {ACTIVITY_ICONS(activity)}
      </div>
      <form onSubmit={handleSubmit} className="add-activity-form">
        <p className="message">
          How many
          {' '}
          {ACTIVITY_UNITS_LONG[activity]}
          {' '}
          you
          {' '}
          {ACTIVITY_ACT[activity]}
          {' '}
          today?
        </p>
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
        <p className="unit-name">
          {ACTIVITY_UNITS[activity]}
        </p>
        <button type="submit" className="btn">Add</button>
      </form>

    </div>
  );
};

AddActivity.propTypes = {
  activity: PropTypes.string.isRequired,
};

export default AddActivity;

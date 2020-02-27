import React from 'react';
import { useDispatch } from 'react-redux';
import { ACTIVITY_TYPE, ACTIVITY_ICONS } from '../../../helpers/constant';
import { setCurrentPage } from '../../../slices/statusSlice';

const AddDataHome = () => {
  const dispatch = useDispatch();

  return (
    <div className="addData-home">
      {
        ACTIVITY_TYPE.map(activity => (
          <button
            type="button"
            key={activity}
            className="addData-card"
            onClick={() => dispatch(setCurrentPage(`add ${activity}`))}
          >
            <div className="icon">
              {ACTIVITY_ICONS(activity)}
            </div>
            <div className="title">
              {activity}
            </div>
          </button>
        ))
      }
    </div>
  );
};


export default AddDataHome;

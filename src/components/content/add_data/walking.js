import React from 'react';
import { useDispatch } from 'react-redux';
import { createActivity } from '../../../slices/activitiesSlice';
import { ACTIVITY_TYPE, ACTIVITY_ICONS, ACTIVITY_UNITS } from '../../../helpers/constant';

const AddWalking = () => {
  const dispatch = useDispatch();

  return (
    <div className="addData-walking">
      <div className="activity-logo">
        {ACTIVITY_ICONS('walking')}
      </div>
      <form action="submit" className="addData-form">
        <button type="button">+</button>
        <input type="text" onChange={() => console.log('input')} />
        <button type="button">-</button>
        <br />
        {ACTIVITY_UNITS['walking']}
        <button type="submit">Add</button>
      </form>

    </div>
  )
}


export default AddWalking;

import React from 'react';
import { ACTIVITY_TYPE, ACTIVITY_ICONS } from '../../helpers/constant';

const AddDataPage = () => {

  return (
    <div className="addData-page">
      {
        ACTIVITY_TYPE.map(activity => (
          <div key={activity} className="addData-card">
            <div className="icon">
              {ACTIVITY_ICONS(activity)}
            </div>
            <div className="title">
              {activity}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default AddDataPage;

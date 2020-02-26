import React from 'react';
import { useSelector } from 'react-redux';
import AddDataHome from './add_data/index';
import AddWalking from './add_data/walking';

const AddDataPage = () => {
  const { currentPage } = useSelector(state => state.status);

  const selectPage = (current) => {
    switch (current) {
      case 'Add Data':
        return <AddDataHome />;
      case 'add walking':
        return <AddWalking />;
      default:
        return <AddDataHome />
    }
  }

  const page = selectPage(currentPage);

  return (
    <div className="addData-page">
      {page}
    </div>
  )
}

export default AddDataPage;

import React from 'react';
import { useSelector } from 'react-redux';
import AddDataHome from './home';
import AddActivity from './addActivity';

const AddDataPage = () => {
  const { currentPage } = useSelector(state => state.status);

  const selectPage = current => {
    const activity = current.split(' ')[1];
    switch (current) {
      case 'add walking':
      case 'add running':
      case 'add cycling':
      case 'add swimming':
      case 'add exercise':
        return <AddActivity activity={activity} />;
      default:
        return <AddDataHome />;
    }
  };

  const page = selectPage(currentPage);

  return (
    <div className="addData-page">
      {page}
    </div>
  );
};

export default AddDataPage;

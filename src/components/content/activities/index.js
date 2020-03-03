import React from 'react';
import { useSelector } from 'react-redux';
import ActivitiesHomePage from './home';

const ActivitiesPage = () => {
  const { currentPage } = useSelector(state => state.status);

  const selectPage = current => {
    switch (current) {
      case 'edit activity':
        return (
          <div>
            Under Construction.
          </div>
        );
      default:
        return <ActivitiesHomePage />;
    }
  };

  const page = selectPage(currentPage);

  return (
    <div className="more-page">
      {page}
    </div>
  );
};

export default ActivitiesPage;

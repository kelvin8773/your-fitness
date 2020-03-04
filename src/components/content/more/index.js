import React from 'react';
import { useSelector } from 'react-redux';
import MoreHomePage from './home';
import EditUserPage from './editUser';

const MorePage = () => {
  const { currentPage } = useSelector(state => state.status);

  const selectPage = current => {
    switch (current) {
      case 'edit user':
        return <EditUserPage />;
      default:
        return <MoreHomePage />;
    }
  };

  const page = selectPage(currentPage);

  return (
    <div className="more-page">
      {page}
    </div>
  );
};

export default MorePage;

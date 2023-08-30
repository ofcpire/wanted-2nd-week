import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/global/Header';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Loading from './components/global/Loading';

function Layout() {
  const isLoading = useSelector((state: RootState) => state.isLoadingSlice);
  console.log(isLoading);
  return (
    <>
      <Header />
      {isLoading ? <Outlet /> : <Loading />}
    </>
  );
}

export default Layout;

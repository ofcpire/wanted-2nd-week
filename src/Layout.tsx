import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/global/Header';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Loading from './components/global/Loading';

function Layout() {
  const isLoading = useSelector((state: RootState) => state.isLoadingSlice);
  return (
    <>
      <Header />
      <section className="py-[84px]">{isLoading ? <Outlet /> : <Loading />}</section>
    </>
  );
}

export default Layout;

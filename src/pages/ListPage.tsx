import React from 'react';
import IssueList from '../components/list/IssueList';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import LoadPageIndicator from '../components/list/LoadPageIndicator';

export default function ListPage() {
  const issueList = useSelector((state: RootState) => state.issueListSlice.issueList);
  return (
    <>
      <IssueList issueList={issueList} />
      <LoadPageIndicator />
    </>
  );
}

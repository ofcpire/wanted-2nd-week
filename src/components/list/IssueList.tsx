import React, { useState, useEffect, useRef } from 'react';
import IssueItem from './IssueItem';
import ListAd from './ListAd';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { AppDispatch } from '../../redux/store';
import { getNextIssueList } from '../../redux/issueListSlice';
import { RootState } from '../../redux/store';

export default function IssueList({ issueList }: { issueList: IssueContentType[] }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isPending = useSelector((state: RootState) => state.issueListSlice.isPending);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (scrollRef.current)
      window.addEventListener('scroll', () => {
        if (
          scrollRef.current &&
          window.pageYOffset / (scrollRef.current?.clientHeight - window.innerHeight) >= 1 &&
          !isPending
        )
          dispatch(getNextIssueList());
      });
  }, [scrollRef]);

  return (
    <section ref={scrollRef}>
      {issueList.map((issue, idx) => (
        <>
          <IssueItem issue={issue} key={issue.number} />
          {(idx + 1) % 4 === 0 && <ListAd key={idx} />}
        </>
      ))}
    </section>
  );
}

import React from 'react';
import IssueInfo from '../global/IssueInfo';
import IssueBody from './IssueBody';

export default function IssueContent({ issueData }: { issueData: IssueContentType }) {
  return (
    <>
      <IssueInfo issueData={issueData} needImg={true} />
      <IssueBody issueBody={issueData.body} />
    </>
  );
}

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import IssueContent from '../components/content/IssueContent';

export default function DetailPage() {
  const issueData = useLoaderData() as IssueContentType;
  return <IssueContent issueData={issueData} />;
}

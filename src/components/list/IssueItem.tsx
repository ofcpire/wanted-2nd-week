import React from 'react';
import { useNavigate } from 'react-router-dom';
import IssueInfo from '../global/IssueInfo';

export default function IssueItem({ issue }: { issue: IssueContentType }) {
  const navigate = useNavigate();
  const navToContentPage = () => {
    navigate(`/${issue.number}`);
  };
  return (
    <div onClick={navToContentPage} className="cursor-pointer">
      <IssueInfo issueData={issue} needImg={false} />
    </div>
  );
}

import React from 'react';

export default function IssueInfo({ issueData }: { issueData: IssueContentType }) {
  return (
    <div
      style={{
        borderBottom: '1px solid black',
        padding: '30px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <div>
          #{issueData.number} {issueData.title}
        </div>
        <span>
          작성자:{issueData.user.login}, 작성일:{issueData.created_at}
        </span>
      </div>
      <div>코멘트:{issueData.comments}</div>
    </div>
  );
}

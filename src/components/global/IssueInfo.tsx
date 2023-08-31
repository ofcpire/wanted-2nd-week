import React from 'react';
import dateParser from '../../lib/utils/dateParser';

export default function IssueInfo({ issueData }: { issueData: IssueContentType }) {
  return (
    <div className="border-b-2 border-solid border-[lightgrey] p-5 flex justify-between items-center">
      <div className="flex">
        <img src={issueData.user.avatar_url} className="h-[50px] w-[50px]"></img>
        <div className="pl-3">
          <h1 className="font-semibold">
            #{issueData.number} {issueData.title}
          </h1>
          <span>
            작성자: {issueData.user.login}, 작성일: {dateParser(issueData.created_at)}
          </span>
        </div>
      </div>
      <div className="min-w-max">코멘트:{issueData.comments}</div>
    </div>
  );
}

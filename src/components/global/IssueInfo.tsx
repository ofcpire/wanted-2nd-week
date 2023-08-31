import React from 'react';

export default function IssueInfo({ issueData }: { issueData: IssueContentType }) {
  return (
    <div className="border-b border-solid border-black p-7 cursor-pointer flex justify-between items-center">
      <div className="flex">
        <img src={issueData.user.avatar_url} className="h-[50px] w-[50px]"></img>
        <div className="pl-3">
          <div>
            #{issueData.number} {issueData.title}
          </div>
          <span>
            작성자:{issueData.user.login}, 작성일:{issueData.created_at}
          </span>
        </div>
      </div>
      <div>코멘트:{issueData.comments}</div>
    </div>
  );
}

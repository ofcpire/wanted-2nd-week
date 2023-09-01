import React from 'react';
import dateParser from '../../lib/utils/dateParser';

export default function IssueInfo({
  issueData,
  needImg,
}: {
  issueData: IssueContentType;
  needImg?: boolean;
}) {
  return (
    <div className="border-b-2 border-solid border-[lightgrey] p-3 flex justify-between items-center">
      <div className="flex">
        {needImg && (
          <img
            src={issueData.user.avatar_url}
            alt="user-profile-image"
            className="h-[50px] w-[50px] mr-3"
          ></img>
        )}
        <div>
          <h1 className="font-semibold text-md">
            #{issueData.number} {issueData.title}
          </h1>
          <span className="text-sm">
            작성자: {issueData.user.login}, 작성일: {dateParser(issueData.created_at)}
          </span>
        </div>
      </div>
      <div className="min-w-max">코멘트:{issueData.comments}</div>
    </div>
  );
}

import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function IssueBody({ issueBody }: { issueBody: string }) {
  return <ReactMarkdown className="p-5">{issueBody}</ReactMarkdown>;
}

import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function IssueBody({ issueBody }: { issueBody: string }) {
  return <ReactMarkdown>{issueBody}</ReactMarkdown>;
}

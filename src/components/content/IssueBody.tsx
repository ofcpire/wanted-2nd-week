import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';

export default function IssueBody({ issueBody }: { issueBody: string }) {
  return <MarkdownPreview source={issueBody} className="p-5" />;
}

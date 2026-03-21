import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownPreviewProps {
  previewCode: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ previewCode }) => {
  return (
    <div className="flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-gray-100 p-3 border-b border-gray-200 font-bold text-gray-800 text-base text-center tracking-wide">
        Markdown 미리보기
      </div>
      <div className="p-8 flex-1 overflow-auto bg-white prose prose-rose max-w-none prose-sm sm:prose-base prose-pre:bg-gray-100 prose-pre:text-gray-800 prose-a:text-rose-600 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{previewCode}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPreview;

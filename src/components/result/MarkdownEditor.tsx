import React, { useState, useEffect } from 'react';

interface MarkdownEditorProps {
  initialCode: string;
  onRunCode: (code: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ initialCode, onRunCode }) => {
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm relative">
      <div className="bg-gray-100 p-3 border-b border-gray-200 font-bold text-gray-800 text-base flex justify-end items-center px-4 relative tracking-wide">
        <span className="absolute left-1/2 -translate-x-1/2">Markdown 에디터</span>
        <button
          onClick={handleCopy}
          className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors flex items-center gap-1.5 border shadow-sm ${
            copied
              ? 'bg-green-50 text-green-700 border-green-200'
              : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
          }`}
        >
          {copied ? (
            <>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        spellCheck={false}
        className="p-6 flex-1 w-full resize-none overflow-auto bg-gray-50/50 text-sm text-gray-800 font-mono leading-relaxed outline-none focus:bg-white transition-colors"
      />
      <div className="bg-gray-50 p-3 border-t border-gray-200 flex justify-end">
        <button
          onClick={() => onRunCode(code)}
          className="px-6 py-2 bg-gray-800 text-white font-semibold text-sm rounded-lg hover:bg-gray-900 transition-colors shadow-sm flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          코드 실행
        </button>
      </div>
    </div>
  );
};

export default MarkdownEditor;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Button from '@/components/common/Button';

const Result = () => {
  const navigate = useNavigate();

  const dummyMarkdown = `# Sample Markdown

This is a mock output from the PDF conversion. It has been generated to showcase the independent scrolling feature inside this pane.

## Features
- Tables
- Lists
- **Bold text**
- *Italic text*
- [Links](https://example.com)

### 1. Extracted Text Block
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec efficitur turpis. Fusce eget lacus mauris. Pellentesque ut libero eu mi fringilla maximus congue sed libero. In tristique nunc nec tristique pharetra. Proin facilisis, urna vel scelerisque commodo, lectus risus tincidunt urna, quis facilisis turpis magna a massa.

### 2. Tabular Data

| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Row 1    | Data A   | Data B   |
| Row 2    | Data C   | Data D   |
| Row 3    | Data E   | Data F   |

### 3. Code Block Support
\`\`\`javascript
function calculateConversionProgress() {
  let progress = 0;
  return progress + 100;
}
\`\`\`

### 4. Details
Donec non interdum neque, sed rutrum justo. Sed ac ligula purus. In hac habitasse platea dictumst. Maecenas sed dui vitae elit ullamcorper rhoncus vel ac est. Nunc eleifend vel risus quis elementum.
`;

  const [code, setCode] = useState(dummyMarkdown);
  const [previewCode, setPreviewCode] = useState(dummyMarkdown);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleRunCode = () => {
    setPreviewCode(code);
  };

  return (
    <div className="w-full max-w-[1920px] px-4 md:px-8 lg:px-12 mx-auto mt-6 flex flex-col items-center">
      {/* 1. Header Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-10 border-b border-gray-200 pb-5 w-[80%] text-center">
        Markdown 변환 결과
      </h2>

      {/* 2. Split Code & Preview View */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 h-[500px]">
        {/* Left pane: Markdown Preview */}
        <div className="flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-gray-100 p-3 border-b border-gray-200 font-bold text-gray-800 text-base text-center tracking-wide">
            Markdown 미리보기
          </div>
          <div className="p-8 flex-1 overflow-auto bg-white prose prose-rose max-w-none prose-sm sm:prose-base prose-pre:bg-gray-100 prose-pre:text-gray-800 prose-a:text-rose-600 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{previewCode}</ReactMarkdown>
          </div>
        </div>

        {/* Right pane: Markdown Code */}
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
              onClick={handleRunCode}
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
      </div>

      {/* 3. Action Buttons */}
      <div className="flex flex-col items-center gap-6 mb-10 mt-4">
        <Button>Download .zip</Button>

        <Button variant="link" onClick={() => navigate('/')}>
          다른 파일 변환하기
        </Button>
      </div>
    </div>
  );
};

export default Result;

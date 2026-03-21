import { useNavigate } from 'react-router-dom';

const Result = () => {
  const navigate = useNavigate();

  const dummyMarkdown = `# Sample Markdown

This is a mock output from the PDF conversion.

## Features
- Tables
- Lists
- **Bold text**`;

  return (
    <div className="w-full max-w-6xl mx-auto mt-6 flex flex-col items-center">
      {/* 1. Header Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-10 border-b border-gray-200 pb-5 w-[80%] text-center">
        Markdown Convert Result
      </h2>

      {/* 2. Split Code & Preview View */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 h-[500px]">
        {/* Left pane: Markdown Preview */}
        <div className="flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-gray-100 p-3 border-b border-gray-200 font-semibold text-gray-700 text-sm text-center">
            Markdown Preview
          </div>
          <div className="p-8 flex-1 overflow-auto text-gray-800 bg-white">
            {/* 임시 하드코딩된 HTML 렌더링 (실제 상황에선 react-markdown 등 사용) */}
            <h1 className="text-3xl font-extrabold mb-4 border-b pb-2 text-gray-900">
              Sample Markdown
            </h1>
            <p className="mb-6 text-gray-600 leading-relaxed text-lg">
              This is a mock output from the PDF conversion.
            </p>
            <h2 className="text-2xl font-bold mb-3 mt-6 text-gray-800">Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Tables</li>
              <li>Lists</li>
              <li>
                <strong className="font-bold">Bold text</strong>
              </li>
            </ul>
          </div>
        </div>

        {/* Right pane: Markdown Code */}
        <div className="flex flex-col h-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-gray-100 p-3 border-b border-gray-200 font-semibold text-gray-700 text-sm text-center">
            Markdown Code
          </div>
          <div className="p-6 flex-1 overflow-auto bg-gray-50/50 text-sm text-gray-800 font-mono whitespace-pre-wrap leading-relaxed outline-none">
            {dummyMarkdown}
          </div>
        </div>
      </div>

      {/* 3. Action Buttons */}
      <div className="flex flex-col items-center gap-6 mb-10">
        <button className="px-12 py-3.5 rounded-full text-white font-bold text-lg shadow-md transition-transform hover:scale-105 active:scale-95 bg-rose-500 hover:bg-rose-600 block">
          Download .zip
        </button>

        <button
          onClick={() => navigate('/')}
          className="text-gray-500 hover:text-rose-600 font-medium transition-colors underline underline-offset-4"
        >
          Convert another file
        </button>
      </div>
    </div>
  );
};

export default Result;

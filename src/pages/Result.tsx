import { useNavigate } from 'react-router-dom';

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

  return (
    <div className="w-full max-w-[1920px] px-4 md:px-8 lg:px-12 mx-auto mt-6 flex flex-col items-center">
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
              This is a mock output from the PDF conversion. It has been generated to showcase the
              independent scrolling feature inside this pane.
            </p>

            <h2 className="text-2xl font-bold mb-3 mt-6 text-gray-800">Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Tables</li>
              <li>Lists</li>
              <li>
                <strong className="font-bold">Bold text</strong>
              </li>
              <li>
                <em className="italic">Italic text</em>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Links
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-8 text-gray-800">1. Extracted Text Block</h3>
            <p className="mb-6 text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec efficitur turpis.
              Fusce eget lacus mauris. Pellentesque ut libero eu mi fringilla maximus congue sed
              libero. In tristique nunc nec tristique pharetra.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-8 text-gray-800">2. Tabular Data</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Header 1
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Header 2
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      Header 3
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Row 1</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Data A</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Data B</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Row 2</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Data C</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Data D</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-600">Row 3</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Data E</td>
                    <td className="px-4 py-3 text-sm text-gray-600">Data F</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold mb-3 mt-8 text-gray-800">3. Code Block Support</h3>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm text-gray-800 font-mono">
              {`function calculateConversionProgress() {
  let progress = 0;
  return progress + 100;
}`}
            </pre>

            <h3 className="text-xl font-bold mb-3 mt-8 text-gray-800">4. Details</h3>
            <p className="mb-6 text-gray-600 leading-relaxed pb-8">
              Donec non interdum neque, sed rutrum justo. Sed ac ligula purus. In hac habitasse
              platea dictumst. Maecenas sed dui vitae elit ullamcorper rhoncus vel ac est.
            </p>
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

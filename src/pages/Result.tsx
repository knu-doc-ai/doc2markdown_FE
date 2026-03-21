import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';
import MarkdownPreview from '@/components/result/MarkdownPreview';
import MarkdownEditor from '@/components/result/MarkdownEditor';

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

  const [previewCode, setPreviewCode] = useState(dummyMarkdown);

  return (
    <div className="w-full max-w-[1920px] px-4 md:px-8 lg:px-12 mx-auto mt-6 flex flex-col items-center">
      {/* 1. Header Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-10 border-b border-gray-200 pb-5 w-[80%] text-center">
        Markdown 변환 결과
      </h2>

      {/* 2. Split Code & Preview View */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 h-[500px]">
        {/* Left pane: Markdown Preview */}
        <MarkdownPreview previewCode={previewCode} />

        {/* Right pane: Markdown Code Editor */}
        <MarkdownEditor initialCode={dummyMarkdown} onRunCode={setPreviewCode} />
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

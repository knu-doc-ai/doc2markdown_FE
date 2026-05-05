import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getResult, downloadResultZip } from '@/api/documents';
import Button from '@/components/common/Button';
import MarkdownPreview from '@/components/result/MarkdownPreview';
import MarkdownEditor from '@/components/result/MarkdownEditor';

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const documentId = location.state?.documentId;

  const [previewCode, setPreviewCode] = useState('');
  const [initialCode, setInitialCode] = useState('');

  useEffect(() => {
    if (!documentId) return;

    const fetchResult = async () => {
      try {
        const res = await getResult(documentId);
        if (res.markdown) {
          setPreviewCode(res.markdown);
          setInitialCode(res.markdown);
        }
      } catch (error) {
        console.error('결과를 가져오는데 실패했습니다:', error);
      }
    };

    fetchResult();
  }, [documentId]);

  const handleDownload = () => {
    if (documentId) {
      downloadResultZip(documentId);
    }
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
        <MarkdownPreview previewCode={previewCode} />

        {/* Right pane: Markdown Code Editor */}
        <MarkdownEditor initialCode={initialCode} onRunCode={setPreviewCode} />
      </div>

      {/* 3. Action Buttons */}
      <div className="flex flex-col items-center gap-6 mb-10 mt-4">
        <Button onClick={handleDownload}>Download .zip</Button>

        <Button variant="link" onClick={() => navigate('/')}>
          다른 파일 변환하기
        </Button>
      </div>
    </div>
  );
};

export default Result;

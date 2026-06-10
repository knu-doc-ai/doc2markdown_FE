import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUpload from '@/components/FileUpload';
import Button from '@/components/common/Button';
import { uploadDocument, startConversion } from '@/api/documents';

const Home = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileSelect = (selectedFile: File) => {
    if (selectedFile.type !== 'application/pdf') {
      alert('PDF 파일만 업로드 가능합니다.');
      return;
    }
    setFile(selectedFile);
  };

  const handleDownload = async () => {
    if (!file) {
      alert('먼저 변환할 PDF 파일을 업로드해주세요.');
      return;
    }
    setIsLoading(true);
    try {
      // 1. Upload Document
      const uploadRes = await uploadDocument(file);
      const docId = uploadRes.documentId;

      // 2. Start Conversion (defaults to 'gfm')
      await startConversion(docId);

      // 3. Navigate to progress page with documentId
      navigate('/converting', { state: { documentId: docId } });
    } catch (error) {
      console.error('Failed to start conversion:', error);
      alert('변환 시작 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-8 p-6 flex flex-col items-center">
      {/* 1. 업로드 영역 (점선 테두리 디자인) */}
      <FileUpload onFileSelect={handleFileSelect} />

      {/* 선택된 파일 표시 */}
      <div className="min-h-[2rem] mt-3">
        {file && (
          <p className="text-sm text-gray-600">
            선택된 파일: <span className="font-semibold text-gray-800">{file.name}</span>
          </p>
        )}
      </div>

      {/* 2. 액션 버튼 */}
      <Button
        onClick={handleDownload}
        disabled={isLoading || !file}
        className={`px-10 mt-6 ${!file || isLoading ? '!bg-rose-300 !opacity-80 hover:!bg-rose-300 hover:!scale-100 active:!scale-100' : ''}`}
      >
        {isLoading ? '준비 중...' : 'Markdown (GFM)으로 변환'}
      </Button>
    </div>
  );
};

export default Home;

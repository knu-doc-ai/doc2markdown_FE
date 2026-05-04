import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FileUpload from '@/components/FileUpload';
import FormatSelector from '@/components/home/FormatSelector';
import Button from '@/components/common/Button';

const FORMATS = ['CommonMark', 'GitHub Flavored Markdown (GFM)', 'AsciiDoc'];

const Home = () => {
  const [file, setFile] = useState<File | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string>(FORMATS[0]);

  const navigate = useNavigate();

  const handleFileSelect = (selectedFile: File) => {
    if (selectedFile.type !== 'application/pdf') {
      alert('PDF 파일만 업로드 가능합니다.');
      return;
    }
    setFile(selectedFile);
  };

  const handleDownload = () => {
    if (!file) {
      alert('먼저 변환할 PDF 파일을 업로드해주세요.');
      return;
    }
    // 상태값 등을 전달할 수도 있지만 현재는 단순 이동 처리
    navigate('/converting');
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

      {/* 2. 포맷 선택 영역 */}
      <FormatSelector
        formats={FORMATS}
        selectedFormat={selectedFormat}
        onSelectFormat={setSelectedFormat}
      />

      {/* 3. 액션 버튼 */}
      <Button
        onClick={handleDownload}
        className={`px-10 ${!file ? '!bg-rose-300 !opacity-80 hover:!bg-rose-300 hover:!scale-100 active:!scale-100' : ''}`}
      >
        변환 시작
      </Button>
    </div>
  );
};

export default Home;

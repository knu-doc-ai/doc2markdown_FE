import { useState } from 'react';
import FileUpload from '@/components/FileUpload';

const Home = () => {
  const [file, setFile] = useState<File | null>(null);

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
    alert(`${file.name} 변환 프로세스를 시작합니다...`);
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

      {/* 2. 포맷 선택 영역 (사진과 비슷한 느낌을 위해 'Markdown으로 변환'을 활성 상태로 묘사) */}
      <div className="flex gap-4 justify-center mt-6 mb-8">
        <div className="px-6 py-2.5 rounded-full text-sm font-semibold bg-gray-200 text-gray-600 shadow-inner">
          Markdown으로 변환
        </div>
      </div>

      {/* 3. 액션 버튼 (연어색 다운로드 버튼) */}
      <button
        onClick={handleDownload}
        className="px-10 py-3.5 rounded-full text-white font-bold text-lg shadow-md transition-transform hover:scale-105 active:scale-95"
        style={{ backgroundColor: '#ff9c9c' }}
      >
        변환된 Markdown 다운로드
      </button>
    </div>
  );
};

export default Home;

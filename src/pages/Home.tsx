import { useState } from 'react';
import FileUpload from '@/components/FileUpload';

const FORMATS = ['CommonMark', 'GitHub Flavored Markdown (GFM)', 'AsciiDoc'];

const Home = () => {
  const [file, setFile] = useState<File | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string>(FORMATS[0]);

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
    alert(`${file.name} 파일을 ${selectedFormat} 형식으로 변환합니다...`);
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
      <div className="flex gap-4 justify-center mt-6 mb-8 flex-wrap">
        {FORMATS.map((fmt) => (
          <button
            key={fmt}
            onClick={() => setSelectedFormat(fmt)}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              selectedFormat === fmt
                ? 'bg-gray-200 text-gray-800 shadow-inner'
                : 'bg-white text-gray-500 border border-gray-300 hover:bg-gray-50'
            }`}
          >
            {fmt}
          </button>
        ))}
      </div>

      {/* 3. 액션 버튼 (파일 업로드 여부에 따라 색상 변경) */}
      <button
        onClick={handleDownload}
        className={`px-10 py-3.5 rounded-full text-white font-bold text-lg shadow-md transition-all duration-300 hover:scale-105 active:scale-95 ${
          file ? 'bg-red-600 hover:bg-red-700' : 'bg-[#ff9c9c]'
        }`}
      >
        변환 시작
      </button>
    </div>
  );
};

export default Home;

import React, { useCallback, useRef } from 'react';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        onFileSelect(e.dataTransfer.files[0]);
      }
    },
    [onFileSelect],
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        onFileSelect(e.target.files[0]);
      }
    },
    [onFileSelect],
  );

  return (
    <div
      className="w-full h-80 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center bg-white transition-colors hover:bg-gray-50"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <p className="text-gray-800 text-lg font-bold mb-2">PDF 파일을 업로드하세요</p>
      <button
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer text-gray-500 font-medium hover:text-gray-700 transition-colors underline underline-offset-4"
      >
        Drag & Drop 또는 클릭
      </button>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept=".pdf,application/pdf"
        onChange={handleFileInput}
      />
    </div>
  );
};

export default FileUpload;

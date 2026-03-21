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
      <p className="text-gray-700 mb-5 font-medium">여기에 PDF를 드래그 앤 드롭하거나</p>
      <button
        onClick={() => inputRef.current?.click()}
        className="cursor-pointer px-6 py-2.5 border border-gray-300 rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-sm font-semibold text-sm"
      >
        PDF 업로드
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

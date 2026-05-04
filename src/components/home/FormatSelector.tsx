import React from 'react';

interface FormatSelectorProps {
  formats: string[];
  selectedFormat: string;
  onSelectFormat: (format: string) => void;
}

const FormatSelector: React.FC<FormatSelectorProps> = ({
  formats,
  selectedFormat,
  onSelectFormat,
}) => {
  return (
    <div className="flex gap-4 justify-center mt-6 mb-8 flex-wrap">
      {formats.map((fmt) => (
        <button
          key={fmt}
          onClick={() => onSelectFormat(fmt)}
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
  );
};

export default FormatSelector;

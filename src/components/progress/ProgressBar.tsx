import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="w-full mb-10 px-4">
      <div className="flex justify-between text-base font-semibold text-gray-700 mb-3">
        <span>진행률</span>
        <span className="text-rose-600">{progress}%</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-5 overflow-hidden shadow-inner">
        <div
          className="bg-rose-500 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;

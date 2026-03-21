import React from 'react';

interface StepListProps {
  steps: string[];
  progress: number;
}

const StepList: React.FC<StepListProps> = ({ steps, progress }) => {
  const getStepStatus = (index: number) => {
    const stepThreshold = (index + 1) * 25;
    const currentThreshold = index * 25;

    if (progress >= stepThreshold) return 'done';
    if (progress > currentThreshold && progress < stepThreshold) return 'loading';
    return 'pending';
  };

  const renderIcon = (status: string) => {
    switch (status) {
      case 'done':
        return <span className="text-rose-500 font-bold">✔</span>;
      case 'loading':
        return <span className="text-yellow-500 font-bold">⏳</span>;
      default:
        return <span className="text-gray-300 font-bold">⬜</span>;
    }
  };

  return (
    <div className="w-full px-6 flex flex-col gap-5 mb-12">
      {steps.map((step, index) => {
        const status = getStepStatus(index);
        return (
          <div key={index} className="flex items-center gap-4">
            <div className="w-8 flex justify-center text-xl">{renderIcon(status)}</div>
            <span
              className={`text-lg transition-colors duration-300 ${
                status === 'done'
                  ? 'text-gray-800 font-semibold'
                  : status === 'loading'
                    ? 'text-rose-600 font-semibold animate-pulse'
                    : 'text-gray-400 font-medium'
              }`}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default StepList;

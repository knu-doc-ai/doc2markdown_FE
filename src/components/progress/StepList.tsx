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
        return (
          <svg
            className="w-6 h-6 text-rose-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        );
      case 'loading':
        return (
          <svg className="w-6 h-6 text-rose-400 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        );
      default:
        return (
          <svg
            className="w-6 h-6 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="8" strokeWidth={2} />
          </svg>
        );
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

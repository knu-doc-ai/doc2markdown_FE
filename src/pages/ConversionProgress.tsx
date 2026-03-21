import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const STEPS = ['PDF 분석', 'Layout detection', 'Table parsing', 'Markdown 생성'];

const ConversionProgress = () => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('...');
  const navigate = useNavigate();

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => {
        if (prev === '...') return '..';
        if (prev === '..') return '.';
        return '...';
      });
    }, 500);
    return () => clearInterval(dotInterval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1; // 1%씩 증가하여 약 4~5초 진행 시뮬레이션
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

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
    <div className="w-full max-w-2xl mx-auto mt-12 p-10 bg-white rounded-xl shadow font-sans flex flex-col items-center">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-8 border-b border-gray-100 pb-5 w-full text-center">
        PDF를 Markdown으로 변환하고 있습니다.
      </h2>

      {/* 1. Progress Bar Area */}
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

      {/* 2. Steps List */}
      <div className="w-full px-6 flex flex-col gap-5 mb-12">
        {STEPS.map((step, index) => {
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

      {/* 3. Footer Text */}
      <div className="h-10 w-full flex justify-center">
        <p
          className={`text-lg font-medium transition-opacity flex ${progress === 100 ? 'text-green-600' : 'text-gray-500'}`}
        >
          <span>
            {progress === 100 ? '변환 완료! 결과 페이지로 이동합니다' : '잠시만 기다려주세요'}
          </span>
          <span className="inline-block w-8 text-left">{dots}</span>
        </p>
      </div>

      {/* 변환 완료 시뮬레이션 복귀 (옵션) */}
      {progress === 100 && (
        <button
          onClick={() => navigate('/')}
          className="mt-6 text-sm text-gray-400 underline hover:text-gray-600"
        >
          뒤로 돌아가기
        </button>
      )}
    </div>
  );
};

export default ConversionProgress;

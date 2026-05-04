import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from '@/components/progress/ProgressBar';
import StepList from '@/components/progress/StepList';
import Button from '@/components/common/Button';

const STEPS = ['PDF 분석', 'Layout detection', 'Table parsing', 'Markdown 생성'];

const ConversionProgress = () => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('...');
  const navigate = useNavigate();

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        navigate('/result');
      }, 1500); // 1.5초 뒤 결과창 자동 이동
      return () => clearTimeout(timeout);
    }
  }, [progress, navigate]);

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

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 p-10 bg-white rounded-xl shadow font-sans flex flex-col items-center">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-8 border-b border-gray-100 pb-5 w-full text-center">
        PDF를 Markdown으로 변환하고 있습니다.
      </h2>

      {/* 1. Progress Bar Area */}
      <ProgressBar progress={progress} />

      {/* 2. Steps List */}
      <StepList steps={STEPS} progress={progress} />

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

      {/* 바로 가기 버튼 (자동이동 되지만 버튼도 제공) */}
      {progress === 100 && (
        <Button onClick={() => navigate('/result')} variant="secondary" className="mt-6">
          결과 보러가기
        </Button>
      )}
    </div>
  );
};

export default ConversionProgress;

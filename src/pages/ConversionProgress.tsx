import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkStatus } from '@/api/documents';
import ProgressBar from '@/components/progress/ProgressBar';
import StepList from '@/components/progress/StepList';
import Button from '@/components/common/Button';

const STEPS = ['PDF 분석', 'Layout detection', 'Table parsing', 'Markdown 생성'];

const ConversionProgress = () => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('...');
  const navigate = useNavigate();
  const location = useLocation();
  const documentId = location.state?.documentId;

  useEffect(() => {
    if (!documentId) return;

    // eslint-disable-next-line prefer-const
    let progressInterval: number | undefined;

    const pollStatus = async () => {
      try {
        const res = await checkStatus(documentId);
        if (res.status === 'SUCCESS') {
          setProgress(100);
          clearInterval(progressInterval);
          setTimeout(() => {
            navigate('/result', { state: { documentId } });
          }, 1500);
        } else if (res.status === 'FAILED') {
          clearInterval(progressInterval);
          alert('변환 실패: ' + (res.errorMessage || '알 수 없는 오류'));
          navigate('/');
        } else {
          setProgress((prev) => (prev < 90 ? prev + 3 : prev)); // max bound for PROCESSING state
        }
      } catch (e) {
        console.error('Error polling status', e);
      }
    };

    // Poll every 3 seconds
    progressInterval = window.setInterval(pollStatus, 3000);
    pollStatus(); // initial call

    return () => clearInterval(progressInterval);
  }, [documentId, navigate]);

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

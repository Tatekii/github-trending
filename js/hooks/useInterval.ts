import {useEffect, useRef, useState} from 'react';

const useInterval = (callback: Function, interval: number) => {
  const [second, setSecond] = useState<number>(interval);
  const timerRef = useRef<NodeJS.Timer | null>();

  // 等second跳转
  useEffect(() => {
    if (second < 1) {
      clearInterval(timerRef.current!);
      timerRef.current = null;
      callback();
    }
  }, [second]);
  // 初始化一次倒计时
  useEffect(() => {
    if (timerRef.current) {
      return;
    }
    timerRef.current = setInterval(() => {
      console.log('useinterval');
      setSecond(v => v - 1);
    }, 1000);
  }, []);

  return [second];
};

export default useInterval;

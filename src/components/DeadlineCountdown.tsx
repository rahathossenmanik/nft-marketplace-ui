import { useEffect, useState } from 'react';
import { getDeadlineCountdown } from '../utils/common';

const DeadlineCountdown = ({ deadlineDate }: { deadlineDate: string }) => {
  const [deadline, setDeadline] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      setDeadline(getDeadlineCountdown(deadlineDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [deadlineDate]);

  return <>{deadline}</>;
};

export default DeadlineCountdown;

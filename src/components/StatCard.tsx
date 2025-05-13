
import React from 'react';

interface StatCardProps {
  number: string;
  text: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, text }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-4xl font-bold mb-2 text-white">{number}</p>
      <p className="text-sm text-center text-white/90">{text}</p>
    </div>
  );
};

export default StatCard;

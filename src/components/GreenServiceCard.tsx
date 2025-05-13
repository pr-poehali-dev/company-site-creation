
import React from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

interface GreenServiceCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

const GreenServiceCard: React.FC<GreenServiceCardProps> = ({ title, description, icon, className }) => {
  return (
    <div className={cn("p-6 rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 bg-white", className)}>
      <div className="flex gap-4 items-start">
        <div className="bg-green-100 p-3 rounded-full">
          <Icon name={icon} className="text-green-600 h-6 w-6" />
        </div>
        <div>
          <h3 className="font-semibold text-green-700 text-lg mb-2">{title}</h3>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default GreenServiceCard;


import React from 'react';
import { cn } from '@/lib/utils';

interface ClientCategoryProps {
  title: string;
  imageUrl?: string;
  className?: string;
}

const ClientCategory: React.FC<ClientCategoryProps> = ({ title, imageUrl, className }) => {
  return (
    <div 
      className={cn(
        "h-40 rounded-lg overflow-hidden shadow-md bg-primary/80 flex items-center justify-center transition-transform duration-300 hover:scale-105",
        className
      )}
      style={
        imageUrl 
          ? {
              backgroundImage: `linear-gradient(rgba(14, 88, 136, 0.8), rgba(14, 88, 136, 0.8)), url(${imageUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }
          : {}
      }
    >
      <h3 className="font-bold text-xl text-white text-center p-4">{title}</h3>
    </div>
  );
};

export default ClientCategory;

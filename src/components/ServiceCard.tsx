import React from "react";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className,
}) => {
  return (
    <div
      className={cn(
        "p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300",
        className,
      )}
    >
      <div className="flex gap-4 items-start">
        <div className="bg-blue-100 p-3 rounded-full">
          <Icon name={icon} className="text-blue-700 h-6 w-6" />
        </div>
        <div>
          <h3 className="font-semibold text-blue-700 text-lg mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

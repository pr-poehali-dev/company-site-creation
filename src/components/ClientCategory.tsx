import React from "react";
import { cn } from "@/lib/utils";

interface ClientCategoryProps {
  title: string;
  imageUrl?: string;
  className?: string;
}

const ClientCategory: React.FC<ClientCategoryProps> = ({
  title,
  imageUrl,
  className,
}) => {
  return (
    <div
      className={cn(
        "h-40 rounded-xl overflow-hidden shadow-md bg-blue-700/80 flex items-center justify-center transition-all duration-300 hover:shadow-lg group",
        className,
      )}
      style={
        imageUrl
          ? {
              backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.75), rgba(30, 64, 175, 0.75)), url(${imageUrl})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : {}
      }
    >
      <div className="w-full h-full flex items-center justify-center p-6 transition-transform duration-500 group-hover:scale-105">
        <h3 className="font-bold text-xl text-white text-center group-hover:text-blue-100 transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ClientCategory;

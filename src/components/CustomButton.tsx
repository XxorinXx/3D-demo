import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
  isActive: boolean;
}

const CustomButton = ({ children, className, isActive, onClick, ...attributes }: ButtonProps) => {
  return (
    <button
      disabled={!isActive}
      className={twMerge(
        isActive
          ? "text-xl px-8 py-4 mx-1 my-1 mb-2 mt-auto rounded-2xl bg-primary text-black font-medium"
          : "text-xl px-8 py-4 mx-1 my-1 mb-2 mt-auto rounded-2xl bg-boxes text-white font-medium",
        className
      )}
      onClick={onClick}
      {...attributes}>
      {children}
    </button>
  );
};

export default CustomButton;

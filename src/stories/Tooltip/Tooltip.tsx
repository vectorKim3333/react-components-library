import React, { useState, ReactNode } from "react";
import "./Tooltip.css";

interface TooltipProps {
  title: string | ReactNode | ReactNode[];
  children: ReactNode;
  placement?: string;
  color?: string;
}

export const Tooltip = ({
  title,
  children,
  placement = "top",
  color = "black",
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      className="storybook-tooltip--container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children}
      {isOpen && <span className="storybook-tooltip--title">{title}</span>}
    </div>
  );
};

import React, { ReactNode } from "react";

interface popoverProps {
  children: ReactNode;
}

export const Popover = ({ children }: popoverProps) => {
  return <>{children}</>;
};

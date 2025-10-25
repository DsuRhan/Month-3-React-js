import React, {type FC, useState } from "react";

interface ToggleProps {
  children: (open: boolean, toggle: () => void) => React.ReactNode;
}

export const Toggle: FC<ToggleProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(o => !o);
  return <>{children(open, toggle)}</>;
};

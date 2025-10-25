import type { FC, ReactNode } from "react";
import ReactDOM from "react-dom";

interface PortalModalProps {
  isOpen: boolean;
  children: ReactNode;
}

const PortalModal: FC<PortalModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;
  const modalRoot = document.getElementById("modal-root") ?? document.body;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      {children}
    </div>,
    modalRoot
  );
};

export default PortalModal;

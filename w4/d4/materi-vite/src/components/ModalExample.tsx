import { useState } from "react";
import PortalModal from "./PortalModal";

const ModalExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="font-semibold mb-2">React Portal - Modal</h2>
      <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={() => setOpen(true)}>
        Buka Modal
      </button>
      <PortalModal open={open} onClose={() => setOpen(false)}>
        <h3 className="font-bold mb-2">Halo dari Portal!</h3>
        <p>Modal ini dirender di luar hierarki root React.</p>
      </PortalModal>
    </div>
  );
};

export default ModalExample;

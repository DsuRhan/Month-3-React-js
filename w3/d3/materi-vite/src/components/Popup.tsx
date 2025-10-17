import React from "react";
import type { Agent } from "../data/agents";

type PopupProps = {
  agent: Agent | null;
  onClose: () => void;
};

const Popup = React.memo(({ agent, onClose }: PopupProps) => {
  if (!agent) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 text-center max-w-90vh h-auto relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h2 className="text-lg font-semibold mb-3 text-gray-700">
          🎉 Congratulations!
        </h2>
        <p className="mb-4 text-gray-600">{agent.name} — S Rank Agent</p>

        <div className="relative group min-w-100 max-w-90vh">
          <img
            src={agent.partial}
            alt={agent.name}
            className="rounded-lg transition-opacity duration-300 group-hover:opacity-0 w-full max-w-[700px]  h-auto object-contain  md:object-contain"
          />
          <img
            src={agent.full}
            alt={`${agent.name} Full Mindscape`}
            className="rounded-lg absolute inset-0 opacity-0 group-hover:opacity-100 w-full max-w-[700px] h-auto object-contain md:object-contain transition-opacity duration-300"
          />
        </div>
      </div>
    </div>
  );
});

export default Popup;

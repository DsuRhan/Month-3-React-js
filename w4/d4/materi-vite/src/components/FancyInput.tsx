import { forwardRef } from "react";

interface FancyInputProps {
  label?: string;
  className?: string;
}

const FancyInput = forwardRef<HTMLInputElement, FancyInputProps>(({ label, className }, ref) => {
  return (
    <label className="block">
      {label && <span className="text-sm text-gray-600 mb-1 block">{label}</span>}
      <input ref={ref} className={`border px-3 py-2 rounded w-full ${className ?? ""}`} type="text" />
    </label>
  );
});

export default FancyInput;

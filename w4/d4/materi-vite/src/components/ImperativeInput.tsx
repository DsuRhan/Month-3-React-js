import { forwardRef, useImperativeHandle, useRef } from "react";

export interface ImperativeInputHandle {
  focus: () => void;
  clear: () => void;
}

const ImperativeInput = forwardRef<ImperativeInputHandle>((_, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => { if (inputRef.current) inputRef.current.value = ""; },
  }));

  return <input ref={inputRef} className="border px-3 py-2 rounded w-full" placeholder="Ketik sesuatu..." />;
});

export default ImperativeInput;

import { useRef } from "react";
import useUpdate from "../hooks/useUpdate";

function InputSlot({
  maxLength = 1,
  index,
  position,
  setPosition,
  inputValues,
  setInputValues,
}: {
  maxLength?: number;
  index: number;
  position: number;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
  inputValues: string[];
  setInputValues: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [handleFocus, handleKeyDown, handleChange, handlePaste] = useUpdate({
    index,
    maxLength,
    inputRef,
    inputValues,
    setInputValues,
    position,
    setPosition,
  });

  return (
    <input
      ref={inputRef}
      type="text"
      maxLength={maxLength}
      value={inputValues[index]}
      onChange={(e) => handleChange(e)}
      onFocus={handleFocus}
      onKeyDown={(e) => handleKeyDown(e)}
      onPaste={(e) => handlePaste(e)}
      className="border rounded-sm p-2 h-10 w-10 text-center"
    />
  );
}

export default InputSlot;

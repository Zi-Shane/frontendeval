import { useRef } from "react";
import useUpdate from "../useUpdate";
import { InputBoxState } from "../type";

function InputBox({
  maxLength = 1,
  index,
  inputValues,
  setInputValues,
}: {
  maxLength?: number;
  index: number;
  inputValues: InputBoxState;
  setInputValues: React.Dispatch<React.SetStateAction<InputBoxState>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [handleFocus, handleKeyDown, handleChange] = useUpdate({
    index,
    maxLength,
    inputRef,
    inputValues,
    setInputValues,
  });

  return (
    <input
      ref={inputRef}
      type="text"
      maxLength={maxLength}
      value={inputValues.values[index]}
      onChange={(e) => handleChange(e)}
      onFocus={handleFocus}
      onKeyDown={(e) => handleKeyDown(e)}
      className="border rounded-sm p-2 h-10 w-10 text-center"
    />
  );
}

export default InputBox;

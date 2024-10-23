import { useCallback, useEffect, useRef, useState } from "react";
import { isNumericAndFixedLength, isValidInput } from "../utils";

function useUpdate({
  maxLength,
  otpCode,
  updateValue,
}: {
  maxLength: number;
  otpCode: string;
  updateValue: (newValue: string) => void;
}) {
  const [position, setPosition] = useState(0);
  const refs = useRef<HTMLInputElement[]>(Array(maxLength).fill(null));
  function handleChange(input: string) {
    if (isValidInput(input)) {
      const newValue = otpCode.slice(0, position) + input;
      updateValue(newValue);
      const newPosition = position < maxLength - 1 ? position + 1 : position;
      setPosition(newPosition);
    }
  }
  function handleKeyDown(key: string) {
    if (key == "Backspace") {
      if (refs.current[position].value !== "") {
        updateValue(otpCode.slice(0, position));
      } else {
        const newPosition = position === 0 ? position : position - 1;
        updateValue(otpCode.slice(0, newPosition));
        setPosition(newPosition);
      }
    }
  }
  function handlePaste(pastedData: string) {
    if (isNumericAndFixedLength(pastedData, maxLength)) {
      updateValue(pastedData);
      setPosition(maxLength - 1);
    }
  }
  const handleFocus = useCallback(() => {
    refs.current[position].focus();
  }, [position]);

  useEffect(() => {
    handleFocus();
  }, [handleFocus]);

  return [refs, handleChange, handleKeyDown, handlePaste, handleFocus] as const;
}

export default useUpdate;

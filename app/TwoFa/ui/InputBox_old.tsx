import React, { useRef } from "react";

function InputBox({ maxLength = 1 }: { maxLength?: number }) {
  const inputRef = useRef<HTMLInputElement>(null);

  function isValidInput(value: string | undefined) {
    const isNumber = /^[0-9]$/.test(value || "");
    return isNumber;
  }

  function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (isValidInput(e.key)) {
      if (inputRef.current?.nextElementSibling) {
        if (inputRef.current?.nextElementSibling.nodeValue !== "") {
          inputRef.current?.setSelectionRange(0, maxLength);
        }
        (inputRef.current.nextElementSibling as HTMLElement).focus();
      }
    } else {
      inputRef.current?.setSelectionRange(0, maxLength);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && inputRef.current?.selectionStart === 0) {
      if (inputRef.current?.previousElementSibling) {
        (inputRef.current.previousElementSibling as HTMLElement).focus();
      }
    }
  }

  function handleFocus() {
    inputRef.current?.setSelectionRange(0, maxLength);
  }

  return (
    <input
      ref={inputRef}
      type="text"
      maxLength={maxLength}
      onFocus={handleFocus}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      className="border p-2"
    />
  );
}

export default InputBox;

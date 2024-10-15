import { isNumericAndFixedLength, isValidInput } from "../utils";

function useUpdate({
  index,
  maxLength,
  inputRef,
  inputValues,
  setInputValues,
  position,
  setPosition,
}: {
  index: number;
  maxLength: number;
  inputRef: React.RefObject<HTMLInputElement>;
  inputValues: string[];
  setInputValues: React.Dispatch<React.SetStateAction<string[]>>;
  position: number;
  setPosition: React.Dispatch<React.SetStateAction<number>>;
}) {
  if (index === position) {
    inputRef.current?.focus();
  }

  function handleFocus() {
    inputRef.current?.setSelectionRange(0, maxLength);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (
      e.key === "Backspace" &&
      inputRef.current?.selectionStart === 0 &&
      inputRef.current?.selectionEnd === 0 &&
      index > 0
    ) {
      const newPosition = index > 0 ? index - 1 : index;
      setPosition(newPosition);
      setInputValues((prev) => {
        const newValues = [...prev];
        newValues[index - 1] = "";
        return newValues;
      });
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (!isValidInput(e.target.value)) {
      setPosition(index);
      setInputValues((prev) => {
        const newValues = [...prev];
        newValues[index] = "";
        return newValues;
      });
    }

    if (isValidInput(e.target.value)) {
      const newPosition = index < inputValues.length - 1 ? index + 1 : index;
      setPosition(newPosition);

      setInputValues((prev) => {
        const newValues = [...prev];
        newValues[index] = value;
        return newValues;
      });
    }

    if (e.target.value == "") {
      const newPosition = index > 0 ? index - 1 : index;
      setPosition(newPosition);

      setInputValues((prev) => {
        const newValues = [...prev];
        newValues[index] = "";
        return newValues;
      });
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    const pastedData = e.clipboardData.getData("Text");
    if (isNumericAndFixedLength(pastedData, inputValues.length)) {
      const pastedValues = pastedData.split("");
      setInputValues(pastedValues);
    }
  }

  return [handleFocus, handleKeyDown, handleChange, handlePaste] as const;
}

export default useUpdate;

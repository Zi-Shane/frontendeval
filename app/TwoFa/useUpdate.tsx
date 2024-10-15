import { isValidInput } from "./utils";
import { InputBoxState } from "./type";

function useUpdate({
  index,
  maxLength,
  inputRef,
  inputValues,
  setInputValues,
}: {
  index: number;
  maxLength: number;
  inputRef: React.RefObject<HTMLInputElement>;
  inputValues: InputBoxState;
  setInputValues: React.Dispatch<React.SetStateAction<InputBoxState>>;
}) {
  if (index === inputValues.postion) {
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
      setInputValues((prev) => {
        const newPosition = index > 0 ? index - 1 : index;
        const newValues = [...prev.values];
        newValues[index - 1] = "";
        return {
          postion: newPosition,
          values: newValues,
        };
      });
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (!isValidInput(e.target.value)) {
      setInputValues((prev) => {
        const newValues = [...prev.values];
        newValues[index] = "";
        return {
          postion: index,
          values: newValues,
        };
      });
    }

    if (isValidInput(e.target.value)) {
      setInputValues((prev) => {
        const newPosition = index < prev.values.length - 1 ? index + 1 : index;
        const newValues = [...prev.values];
        newValues[index] = value;
        return {
          postion: newPosition,
          values: newValues,
        };
      });
    }

    if (e.target.value == "") {
      setInputValues((prev) => {
        const newPosition = index > 0 ? index - 1 : index;
        const newValues = [...prev.values];
        newValues[index] = "";
        return {
          postion: newPosition,
          values: newValues,
        };
      });
    }
  }

  return [handleFocus, handleKeyDown, handleChange] as const;
}

export default useUpdate;

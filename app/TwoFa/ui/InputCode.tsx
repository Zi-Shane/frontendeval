import useUpdate from "../hooks/useUpdate";
import InputSlot from "./InputSlot";

function InputCode({
  otpCode,
  updateValue,
  maxLength,
}: {
  otpCode: string;
  updateValue: (newValue: string) => void;
  maxLength: number;
}) {
  const [refs, handleChange, handleKeyDown, handlePaste, handleFocus] =
    useUpdate({
      maxLength,
      otpCode,
      updateValue,
    });

  return (
    <div className="w-full flex justify-between my-4">
      {Array.from({ length: maxLength }, (_, index) => {
        const slotValue = otpCode.length > index ? otpCode[index] : "";
        return (
          <InputSlot
            key={index}
            addRef={(el) => (refs.current[index] = el as HTMLInputElement)}
            value={slotValue}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
            handlePaste={handlePaste}
            handleFocus={handleFocus}
          />
        );
      })}
    </div>
  );
}

export default InputCode;

import { useState } from "react";
import InputSlot from "./InputSlot";

function InputCode({
  inputValues,
  setValues,
}: {
  inputValues: string[];
  setValues: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [position, setPosition] = useState(0);

  return (
    <div className="w-full flex justify-between my-4">
      {inputValues.map((_, index) => (
        <InputSlot
          key={index}
          index={index}
          position={position}
          setPosition={setPosition}
          inputValues={inputValues}
          setInputValues={setValues}
        />
      ))}
    </div>
  );
}

export default InputCode;

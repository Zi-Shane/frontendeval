import { useState } from "react";
import InputBox from "./InputBox";
import { InputBoxState } from "../type";

function InputBoxControl({ length }: { length: number }) {
  const [inputValues, setInputValues] = useState<InputBoxState>({
    postion: 0,
    values: Array(length).fill(""),
  });

  return (
    <div className="w-full flex justify-between my-4">
      {inputValues.values.map((_, index) => (
        <InputBox
          key={index}
          index={index}
          inputValues={inputValues}
          setInputValues={setInputValues}
        />
      ))}
    </div>
  );
}

export default InputBoxControl;

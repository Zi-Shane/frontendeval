import { useState } from "react";
import { ValidStatus } from "../type";

function usePinCode(pinLength: number) {
  const [values, setValues] = useState(Array(pinLength).fill(""));
  const [hasSpace, setHasSpace] = useState(false);
  const [isValid, setIsValid] = useState(ValidStatus.unset);

  const sendPinCode = () => {
    setHasSpace(false);
    setIsValid(ValidStatus.unset);
    const valueStr = values.join("");
    if (valueStr.length === pinLength) {
      console.log(`Send PinCode: { pin: ${valueStr} }`);

      // fake response
      if (valueStr === "1234") {
        setIsValid(ValidStatus.true);
      } else {
        setIsValid(ValidStatus.false);
      }
    } else {
      setHasSpace(true);
    }
  };

  return [values, setValues, sendPinCode, hasSpace, isValid] as const;
}

export default usePinCode;

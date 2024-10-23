import { useState } from "react";
import { ValidStatus } from "../type";

function useOtp(maxLength: number) {
  const [values, setValues] = useState("");
  const [hasSpace, setHasSpace] = useState(false);
  const [isValid, setIsValid] = useState(ValidStatus.unset);

  function sendOtpCode() {
    setHasSpace(false);
    setIsValid(ValidStatus.unset);

    if (values.length === maxLength) {
      console.log(`Send pin-code to server: { pin: ${values} }`);
      // fake response
      if (values === "1234") {
        setIsValid(ValidStatus.true);
      } else {
        setIsValid(ValidStatus.false);
      }
    } else {
      setHasSpace(true);
    }
  }

  function updateValue(newValue: string) {
    setValues(newValue);
  }

  return [values, updateValue, sendOtpCode, hasSpace, isValid] as const;
}

export default useOtp;

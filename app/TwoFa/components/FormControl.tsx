import { CODE_LENGTH } from "@/data/TwoFa";
import useOtp from "../hooks/useOpt";

import { ValidStatus } from "../type";
import Success from "./Success";
import OtpForm from "./OtpForm";

function FormControl() {
  const [values, updateValue, sendOtpCode, hasSpace, isValid] =
    useOtp(CODE_LENGTH);

  return (
    <div>
      {isValid === ValidStatus.true ? (
        <Success />
      ) : (
        <OtpForm
          values={values}
          updateValue={updateValue}
          sendOtpCode={sendOtpCode}
          hasSpace={hasSpace}
          isValid={isValid}
        />
      )}
    </div>
  );
}

export default FormControl;

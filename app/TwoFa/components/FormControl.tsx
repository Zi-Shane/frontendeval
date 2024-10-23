import { CODE_LENGTH } from "@/data/TwoFa";
import useOtp from "../hooks/useOpt";

import { ValidStatus } from "../type";
import InputCode from "../ui/InputCode";

function FormControl() {
  const [values, updateValue, sendOtpCode, hasSpace, isValid] =
    useOtp(CODE_LENGTH);

  return (
    <div className="w-60 mx-auto">
      <InputCode
        otpCode={values}
        updateValue={updateValue}
        maxLength={CODE_LENGTH}
      />

      <div className="relative">
        <button
          className="w-full py-1 rounded-md text-white bg-black hover:bg-gray-800 z-10"
          onClick={sendOtpCode}
        >
          Submit
        </button>
      </div>
      <p className=" w-full h-6 mt-2 text-red-600">
        {isValid === ValidStatus.false && "* Incorrect pin code!"}
        {hasSpace && "* Spaces are not allowed!"}
      </p>
    </div>
  );
}

export default FormControl;

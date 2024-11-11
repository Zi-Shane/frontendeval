import {
  CODE_LENGTH,
  ERROE_SPACE,
  ERROE_UNMATCH,
  INFO_MSG,
} from "@/data/TwoFa";
import InputCode from "../ui/InputCode";
import { ValidStatus } from "../type";
import HintMsg from "./HintMsg";
import { Button } from "@/components/ui/button";

interface OptFromProps {
  values: string;
  updateValue: (value: string) => void;
  sendOtpCode: () => void;
  hasSpace: boolean;
  isValid: ValidStatus;
}

function OtpForm({
  values,
  updateValue,
  sendOtpCode,
  hasSpace,
  isValid,
}: OptFromProps) {
  return (
    <div>
      <InputCode
        otpCode={values}
        updateValue={updateValue}
        maxLength={CODE_LENGTH}
      />

      <Button
        className="w-full py-1 rounded-md text-white bg-black hover:bg-gray-800 z-10"
        onClick={sendOtpCode}
      >
        Submit
      </Button>

      <HintMsg
        condiction={isValid === ValidStatus.false || hasSpace}
        msg={
          isValid === ValidStatus.false
            ? ERROE_UNMATCH
            : hasSpace
            ? ERROE_SPACE
            : ""
        }
        color="text-red-600"
      />

      <HintMsg condiction={true} msg={INFO_MSG} color="text-gray-500" />
    </div>
  );
}

export default OtpForm;

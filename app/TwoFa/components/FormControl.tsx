import InputCode from "../ui/InputCode";
import usePinCode from "../hooks/usePinCode";
import { ValidStatus } from "../type";

function FormControl({ pinLength }: { pinLength: number }) {
  const [values, setValues, sendPinCode, hasSpace, isValid] =
    usePinCode(pinLength);

  return (
    <div className="w-60 mx-auto">
      <InputCode inputValues={values} setValues={setValues} />

      <div className="relative">
        <button
          className="w-full py-1 rounded-md text-white bg-black hover:bg-gray-800  z-10"
          onClick={sendPinCode}
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

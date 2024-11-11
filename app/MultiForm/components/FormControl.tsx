import FormBlock from "./FormBlock";
import Success from "./Success";
import BackBtn from "./BackBtn";
import useMultiFormControl from "../hooks/useMultiFormControl";
import { initFormSetting } from "../utils";

function FormControl() {
  const initialForm = initFormSetting();
  const [
    forward,
    backward,
    handleFormUpdate,
    formObjList,
    pageNo,
    isSubmit,
    startPageNo,
    lastPageNo,
  ] = useMultiFormControl(initialForm);

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-[350px] h-[450px]">
      {isSubmit ? (
        <Success />
      ) : (
        <>
          <BackBtn isFirst={pageNo === startPageNo} backward={backward} />
          <FormBlock
            onFormUpdate={handleFormUpdate}
            formData={formObjList[pageNo]}
            isLast={pageNo === lastPageNo}
            forward={forward}
          />
        </>
      )}
    </div>
  );
}

export default FormControl;

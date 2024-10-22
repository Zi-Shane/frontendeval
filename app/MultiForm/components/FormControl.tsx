import { useState } from "react";
import BackBtn from "../ui/BackBtn";
import FormBlock from "../ui/FormBlock";
import Success from "./Success";
import { initFormSetting } from "../utils";

function FormControl() {
  const [formObjList, setFormObjList] = useState(() => initFormSetting());
  const [pageNo, setPageNo] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const startPageNo = 0;
  const lastPageNo = formObjList.length - 1;

  function handleSubmit() {
    console.log(formObjList);
    setIsSubmit(true);
  }

  function forward() {
    setPageNo((prev) => (pageNo === lastPageNo ? prev : prev + 1));

    if (pageNo === lastPageNo) {
      handleSubmit();
      setFormObjList(() => initFormSetting());
      setPageNo(0);
    }
  }

  function backward() {
    setPageNo((prev) => (pageNo === startPageNo ? startPageNo : prev - 1));
  }

  function updateForm(newFormData: FormObj) {
    const newAns = [...formObjList];
    newAns[pageNo] = newFormData;
    setFormObjList(newAns);
  }

  return (
    <div className="w-1/2 rounded-lg border bg-card text-card-foreground shadow-sm">
      {isSubmit ? (
        <Success />
      ) : (
        <div>
          <BackBtn isFirst={pageNo === startPageNo} backward={backward} />
          <FormBlock
            updateForm={updateForm}
            formData={formObjList[pageNo]}
            isLast={pageNo === lastPageNo}
            forward={forward}
          />
        </div>
      )}
    </div>
  );
}

export default FormControl;

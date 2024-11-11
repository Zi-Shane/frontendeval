import { useState } from "react";
import { initFormSetting } from "../utils";
import { FormObj } from "../type";

function useMultiFormControl(initialForm: FormObj[]) {
  const [formObjList, setFormObjList] = useState<FormObj[]>(initialForm);
  const [pageNo, setPageNo] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const startPageNo = 0;
  const lastPageNo = formObjList.length - 1;

  function handleSubmit() {
    const res = formObjList.map((v) => {
      return { title: v.title, value: v.value };
    });
    console.log(JSON.stringify(res));
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

  function handleFormUpdate(newFormData: FormObj) {
    const newAns = [...formObjList];
    newAns[pageNo] = newFormData;
    setFormObjList(newAns);
  }

  return [
    forward,
    backward,
    handleFormUpdate,
    formObjList,
    pageNo,
    isSubmit,
    startPageNo,
    lastPageNo,
  ] as const;
}

export default useMultiFormControl;

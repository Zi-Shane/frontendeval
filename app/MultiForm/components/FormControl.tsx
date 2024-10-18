import { useState } from "react";
import BackBtn from "../ui/BackBtn";
import FormBlock from "../ui/FormBlock";

function initMap() {
  return new Map([
    ["name", ""],
    ["phone", ""],
    ["email", ""],
  ]);
}

function FormControl() {
  const [answer, setAnswer] = useState<Map<string, string>>(() => initMap());

  const [pageNo, setPageNo] = useState(0);
  const pageList = Array.from(answer.keys());
  const lastPageNo = pageList.length - 1;

  function forward() {
    setPageNo((prev: number) => (pageNo === lastPageNo ? prev : prev + 1));

    if (pageNo === lastPageNo) {
      console.log(answer);
      setAnswer(() => initMap());
      setPageNo(0);
    }
  }

  function backward() {
    setPageNo((prev: number) => (pageNo === 0 ? prev : prev - 1));
  }

  return (
    <div className="w-1/2 rounded-lg border bg-card text-card-foreground shadow-sm">
      <BackBtn isFirst={pageNo === 0} backward={backward} />
      <FormBlock
        answer={answer}
        setAnswer={setAnswer}
        pageName={pageList[pageNo]}
        isLast={pageNo === lastPageNo}
        forward={forward}
      />
    </div>
  );
}

export default FormControl;

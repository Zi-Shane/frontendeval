import React from "react";
import InputBox from "./InputBox_old";

function InputBoxList({ length }: { length: number }) {
  return (
    <div className="flex">
      {[...Array(length)].map((_, index) => (
        <InputBox key={index} />
      ))}
    </div>
  );
}

export default InputBoxList;

import React from "react";
import InputBox from "./InputBox";

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

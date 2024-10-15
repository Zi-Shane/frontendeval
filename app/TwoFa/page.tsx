"use client";

import { useState } from "react";
import InputBoxControl from "./ui/InputBoxControl";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";

function TwoFaPage() {
  const [sumbit, setSubmit] = useState(false);
  function handleClick() {
    setSubmit(true);
  }
  return (
    <div className="w-full">
      <div className="w-60 mx-auto">
        <InputBoxControl length={4} />
        <div className="relative">
          <button
            className="w-full py-1 rounded-md text-white bg-black hover:bg-gray-800 absolute z-10"
            onClick={handleClick}
          >
            Submit
          </button>
          <div className="absolute -translate-y-1/2">
            <Lottie
              options={{
                loop: sumbit,
                autoplay: sumbit,
                animationData,
                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoFaPage;

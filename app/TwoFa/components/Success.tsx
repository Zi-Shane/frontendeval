import Lottie from "lottie-react";
import animationData from "@/public/lottie/check_lottie.json";

function Success() {
  return (
    <div className="w-full">
      <div className="h-36 w-36 mx-auto">
        <Lottie animationData={animationData} />
      </div>
      <p>request is printed in console</p>
    </div>
  );
}

export default Success;

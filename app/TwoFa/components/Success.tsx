import Lottie from "lottie-react";
import animationData from "@/public/lottie/check_lottie.json";

function Success() {
  return (
    <div className="m-10">
      <Lottie animationData={animationData} />
      <p>request is printed in console</p>
    </div>
  );
}

export default Success;

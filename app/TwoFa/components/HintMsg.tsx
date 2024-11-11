import { cn } from "@/lib/utils";
import React from "react";

interface HintMsgProps {
  condiction: boolean;
  msg: string;
  color: string;
}

function HintMsg({ condiction, msg, color }: HintMsgProps) {
  return <p className={cn("w-full h-6 mt-2", color)}>{condiction && msg}</p>;
}

export default HintMsg;

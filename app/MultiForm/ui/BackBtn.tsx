import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

function BackBtn({
  isFirst,
  backward,
}: {
  isFirst: boolean;
  backward: () => void;
}) {
  return (
    <Button
      variant="ghost"
      className={`${isFirst ? "invisible" : ""}`}
      onClick={backward}
    >
      {isFirst ? null : <ChevronLeft className="h-4 w-4" />}
    </Button>
  );
}

export default BackBtn;

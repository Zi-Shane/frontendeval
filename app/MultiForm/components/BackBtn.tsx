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
    <div className="h-4 w-4">
      {isFirst ? null : (
        <Button variant="ghost" onClick={backward}>
          <ChevronLeft />
        </Button>
      )}
    </div>
  );
}

export default BackBtn;

"use client";

import { BarChartBlock } from "./ui/BarChartBlock";
import { Button } from "@/components/ui/button";
import useChartData from "./hooks/useChartData";

function BarChartPage() {
  const { isLoading, data, getChartData } = useChartData();

  return (
    <div className="m-10 flex justify-center">
      <div className="lg:w-[60vw] w-full max-w-5xl">
        <div className="mb-5">
          <BarChartBlock data={data} />
        </div>
        <div className="flex justify-end">
          <Button
            className="w-[6rem] h-[2.5rem]"
            variant="outline"
            onClick={() => getChartData()}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Reload"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BarChartPage;

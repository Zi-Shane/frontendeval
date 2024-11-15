"use client";

import { Button } from "@/components/ui/button";
import Chart from "./Chart";
import useChartData from "../hooks/useChartData";

function BarChartPage() {
  const { isLoading, data, getChartData } = useChartData();

  return (
    <div className="w-[900px]">
      <Chart data={data} />
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
  );
}

export default BarChartPage;

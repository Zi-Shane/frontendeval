"use client";

import { useCallback, useEffect, useState } from "react";

import { ChartData } from "@/data/BarChartData";
import { fetchData } from "../utils";

// Info: Tab siwtch will cause unmount
function useChartData() {
  const [data, setData] = useState<Array<ChartData>>();
  const [isLoading, setIsLoading] = useState(true);
  const updateChartData = useCallback(async () => {
    setIsLoading(true);
    const resp = await fetchData();
    setData(resp);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const storedData = sessionStorage.getItem("chartData");
    if (storedData) {
      setData(JSON.parse(storedData));
      setIsLoading(false); // server pre-render is true
    } else {
      updateChartData();
    }
  }, [updateChartData]);

  useEffect(() => {
    if (data) {
      sessionStorage.setItem("chartData", JSON.stringify(data));
    }
  }, [data]);

  return { isLoading, data, updateChartData };
}

export default useChartData;

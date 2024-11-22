"use client";

import { useCallback, useEffect, useState } from "react";

import { ChartData } from "@/data/BarChartData";
import { fetchData } from "../utils";

// Info: Tab siwtch will cause unmount & next.js pre-render issue with localstorage
function useChartData() {
  const [data, setData] = useState<Array<ChartData>>();
  const [isLoading, setIsLoading] = useState(true);

  const getChartData = useCallback(async () => {
    setIsLoading(true);
    const resp = await fetchData();
    setData(resp);
    setIsLoading(false);
  }, []);

  // Initial states & Load data from localStorage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("chartData");
    if (storedData) {
      setData(JSON.parse(storedData));
      setIsLoading(false);
    } else {
      getChartData();
    }
  }, [getChartData]);

  // Update localStorage whenever data change
  useEffect(() => {
    if (data) {
      localStorage.setItem("chartData", JSON.stringify(data));
    }
  }, [data]);

  return { isLoading, data, getChartData };
}

export default useChartData;

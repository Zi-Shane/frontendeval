import { useCallback, useEffect, useState } from "react";

import { ChartData } from "@/data/BarChartData";
import { fetchData } from "../utils";

function useChartData() {
  // Info: Tab siwtch will cause unmount
  const storedData = localStorage.getItem("chartData");
  const [data, setData] = useState<Array<ChartData>>(() => {
    if (storedData) {
      return JSON.parse(storedData);
    } else {
      return null;
    }
  });
  const [isLoading, setIsLoading] = useState(storedData ? false : true);

  const getChartData = useCallback(async () => {
    setIsLoading(true);
    const resp = await fetchData();
    setData(resp);
    setIsLoading(false);
  }, []);

  // Load data from localStorage on component mount
  useEffect(() => {
    if (!storedData) {
      getChartData();
    }
  }, [getChartData, storedData]);

  // Update localStorage whenever data change
  useEffect(() => {
    localStorage.setItem("chartData", JSON.stringify(data));
  }, [data]);

  return { isLoading, data, getChartData };
}

export default useChartData;

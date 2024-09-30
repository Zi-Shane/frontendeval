import { useCallback, useEffect, useState } from "react";

import { ChartData } from "@/data/BarChartData";
import { fetchData } from "../utils";

function useChartData() {
  const [data, setData] = useState<Array<ChartData>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getChartData = useCallback(async () => {
    setIsLoading(true);
    const resp = await fetchData();
    setData(resp);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getChartData();
  }, [getChartData]);

  return { isLoading, data, getChartData };
}

export default useChartData;

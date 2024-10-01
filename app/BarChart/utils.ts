import { API, ChartData } from "@/data/BarChartData";

export async function fetchData() {
  let resp = new Array<ChartData>();
  try {
    const response = await fetch(API);
    const text = await response.text();
    resp = format(text.trim().split("\n"));
    resp.sort((a, b) => parseInt(a.label) - parseInt(b.label));
  } catch (e) {
    console.error(e);
  }

  return resp;
}

function format(rawData: string[]) {
  const helperMap = new Map();
  const resArr = new Array<ChartData>();

  rawData.forEach((e: string) => {
    if (helperMap.get(e)) {
      helperMap.set(e, helperMap.get(e) + 1);
    } else {
      helperMap.set(e, 1);
    }
  });

  helperMap.forEach((v, k) => {
    resArr.push({ label: k, value: v });
  });

  return resArr;
}

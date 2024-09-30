export const API =
  "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new";

export type ChartData = {
  label: string;
  value: number;
};

// example
export const ChartData = [
  { label: "A", value: 30 },
  { label: "B", value: 80 },
  { label: "C", value: 45 },
  { label: "D", value: 60 },
  { label: "E", value: 20 },
  { label: "F", value: 90 },
  { label: "G", value: 55 },
  { label: "H", value: 55 },
];

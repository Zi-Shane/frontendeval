"use client";

import ChartControl from "./components/ChartControl";
import Description from "./components/DescriptionBlock";
import { DemoTab } from "../components/DemoTab";

const categories = [
  {
    name: "Demo",
    content: <ChartControl />,
  },
  { name: "Description", content: <Description /> },
];

function BarChartPage() {
  return <DemoTab categories={categories} />;
}

export default BarChartPage;

export type ChartData = {
  label: string;
  value: number;
};

const BarChartCustom = ({ data }: { data: Array<ChartData> }) => {
  // Determine the maximum value for scaling the bars
  const maxValue = Math.max(...data.map((item) => item.value));
  const yAxisLabels = Array.from(
    { length: Math.ceil(maxValue / 10) + 1 },
    (_, i) => i * 10
  );

  return (
    <div className="bar-chart-container">
      <div className="y-axis">
        {yAxisLabels.map((label, index) => (
          <div key={index} className="y-axis-label">
            {label}
          </div>
        ))}
      </div>
      <div className="bar-chart">
        {data.map((item, index) => (
          <div
            key={index}
            className="bar"
            style={{ height: `${(item.value / maxValue) * 100}%` }}
          >
            <span className="bar-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChartCustom;

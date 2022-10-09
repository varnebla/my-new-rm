import { LineChart } from 'chartist';

export function createChart({ chartId, chartLabels, chartValues }) {
  console.log(chartLabels, chartValues);
  const data = {
    labels: chartLabels,
    series: [chartValues]
  };

  const id = `#${chartId}`;

  new LineChart(id, data, {
    showArea: true
  });
}

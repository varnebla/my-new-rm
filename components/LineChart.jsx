import { useEffect } from 'react';
import { createChart } from '../helpers/chartFunctions';

export default function LineChart(props) {
  useEffect( ()=>createChart({
    chartId:'rms-chart',
    chartLabels: props.labels,
    chartValues: props.values
  }))
  return (
    <>
    <div id='rms-chart'></div>
    </>
  )
}
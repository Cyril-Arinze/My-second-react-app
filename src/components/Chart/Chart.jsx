import React from 'react';
import "./Chart.css";
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaxValue = Math.max(...dataPointValues)
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => {
                return (
                    <ChartBar
                        key={dataPoint.label}
                        value={dataPoint.value}
                        label={dataPoint.label}
                        maxValue={totalMaxValue}
                    />
                )
            })}
        </div>
    )
}

export default Chart;
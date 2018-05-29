import React, { Component } from 'react';
import { RadialBarChart, RadialBar, Cell, Legend, Tooltip, ResponsiveContainer,
    LabelList, PolarAngleAxis } from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';

const colors = scaleOrdinal(schemeCategory10).range();

const data = [
    { name: 'легенда?', uv: 60, amt: 31.47, pv: 2400,  fill: '#8884d8' },
    { name: '25-29', uv: 50, amt: 26.69, pv: 4500, fill: '#83a6ed' },
    { name: '30-34', uv: 30, amt: 15.69, pv: -1398, fill: '#8dd1e1' },
    { name: '35-39', uv: 59, amt: 8.22, pv: 2800, fill: '#82ca9d' },
    { name: '40-49', uv: 48, amt: 8.63, pv: 1908, fill: '#a4de6c' },
    { name: '50+', uv: 62, amt: 2.63, pv: -2800, fill: '#d0ed57' },
    { name: 'unknow', uv: 38, amt: 6.67, pv: 4800, fill: '#ffc658' },
];

const colorsD = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57', '#ffc658'];

const initialState = { data };

export default class Demo extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    generateDataset() {
        let classes = Object.assign([], this.props.marks);
        let result = [];
        result.push({
            name: 'Максимална оценка - 6',
            uv: 6,
            atm: 6,
            pv: 6,
            fill: '#54509e'
        });
        classes.map(function (aClass, index) {
            result.push({
                name: aClass.className,
                uv: 6,
                atm: 6,
                pv: (aClass.averageMark === 0)? 1 : aClass.averageMark,
                fill: (index < colorsD.length)? colorsD[index] : colorsD[colorsD.length - 1]
            });
        });

        return result;
    }

    static displayName = 'RadialBarChartDemo';


    render () {
        const  data  = this.generateDataset();
        const style = {
            lineHeight: '24px',
            left: 300,
        };

        const label = {
            orientation: 'outer'
        };

        console.log("STATE", this.state);

        console.log("DATASET", this.generateDataset());

        return (
            <div className='radial-bar-charts'>

                <div className="radial-bar-chart-wrapper">
                    <RadialBarChart
                        width={500}
                        height={300}
                        cx={150}
                        cy={150}
                        innerRadius={20}
                        outerRadius={140}
                        data={data}
                        startAngle={90}
                        endAngle={-270}
                    >
                        <RadialBar background dataKey="pv">
                            <LabelList position="end" />
                        </RadialBar>
                        <Legend iconSize={10} width={240} height={140} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                        <Tooltip/>
                    </RadialBarChart>
                </div>

            </div>
        );
    }
}
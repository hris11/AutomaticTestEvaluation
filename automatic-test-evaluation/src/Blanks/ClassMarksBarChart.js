import React, { Component } from 'react';
import { BarChart, Bar, XAxis} from 'recharts';

const CustomBar = (props) => {
    const { x, y, width, height, fill } = props;

    if (x === +x && y === +y) {
        const path = `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;

        return <path d={path} stroke='none' fill={fill}/>;
    }

    return null;
};


export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static displayName = 'BarChartDemo';

    generateDataset() {
        let classes = Object.assign([], this.props.marks);
        let result = [];
        result.push({
            name: '6',
            uv: 6,
            atm: 6,
            pv: 6,
            time: 0,
            uvError: [100, 50],
            pvError: [110, 20]
        });
        classes.map(function (aClass, index) {
            result.push({
                name: (aClass.className.length >= 7) ? aClass.className.slice(0, 2) + '...' + aClass.className.slice(aClass.className.length - 2, aClass.className.length) : aClass.className,
                pv: 6,
                atm: 6,
                time: index + 1,
                uvError: [100, 50],
                pvError: [110, 20],
                uv: (aClass.averageMark === 0)? 1 : aClass.averageMark
            });
        });

        return result;
    }

    render() {
        const data = this.generateDataset();

        return (
            <div className="bar-charts">
                <div className="bar-chart-wrapper">
                    <BarChart width={500} height={250} barCategoryGap={0} data={data}  margin={{ top: 20, right: 20, bottom: 0, left: 20 }}>
                        <XAxis dataKey="name" />
                        <Bar dataKey="uv" barGap={0} fill="#54509e" shape={CustomBar} />
                    </BarChart>
                </div>
            </div>
        );
    }
}
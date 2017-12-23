import React, {Component} from 'react';
import './GroupsBar.css';

class GroupsBar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main-bar">
                <div className="groups-legend">

                </div>
            </div>
        );
    }
}

const style = {
    color_1_legend: {
        background: '#001f3f',
    },
    color_2_legend: {
        background: '#7FDBFF',
    },
    color_3_legend: {
        background: '#3D9970'
    },
    color_4_legend: {
        background: '#01FF70'
    },
    color_5_legend: {
        background: '#FF4136'
    },
    color_6_legend: {
        background: '#85144b'
    }
};

export default GroupsBar;
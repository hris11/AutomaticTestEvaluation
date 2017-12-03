import React, {Component} from 'react';
import {Slider} from "material-ui";

class BlankMenuSlider extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <p>
                    <span>
                        Чрез плъзгане изберете от колко въпроса да се състои бланката <i>(минимален брой - 1, максимален брой - 60)</i>
                    </span>
                </p>
                <Slider
                    min={1}
                    max={60}
                    step={1}
                    value={this.props.sliderValue}
                    onChange={(event, value) => this.props.handleSlider(event, value)}
                />
                <p>
                    <span>
                        {'Избран брой: '}
                    </span>
                    <span>
                        {this.props.sliderValue}
                    </span>
                </p>
            </div>
        );
    }

}

export default BlankMenuSlider;
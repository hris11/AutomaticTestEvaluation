import React, {Component} from 'react';
import {Slider} from "material-ui";
import "./BlankMenuSlider.css"

class BlankMenuSlider extends Component {

    render() {
        return (
            <div>
                <p>
                    <span className="slider-main-span">
                        Чрез плъзгане изберете от колко въпроса да се състои бланката
                    </span>
                    <span className="slider-comment-span">
                        <i>  (минимален брой - 1, максимален брой - 60)</i>
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
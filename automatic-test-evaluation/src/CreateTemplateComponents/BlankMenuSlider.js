import React, {Component} from 'react';
import {Slider} from "material-ui";

class BlankMenuSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderValue: 10
        }
    }

    handleSlider(event, value) {
        this.setState({
            sliderValue: value
        });
        
        this.props.handleAnswerSlider(value);
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
                    value={this.state.sliderValue}
                    onChange={(event, value) => this.handleSlider(event, value)}
                />
                <p>
                    <span>
                        {'Избран брой: '}
                    </span>
                    <span>
                        {this.state.sliderValue}
                    </span>
                </p>
            </div>
        );
    }

}

export default BlankMenuSlider;
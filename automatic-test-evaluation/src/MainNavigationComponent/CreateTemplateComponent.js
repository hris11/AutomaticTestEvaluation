import React, {Component} from 'react';
import {Divider, DropDownMenu, List, MenuItem, Paper, RaisedButton, Slider, TextField, Toggle} from "material-ui";
import SingleAnswerTemplateComponent from "../CreateTemplateComponents/SecondStep/SingleAnswerBlankList";
import BlankManagerComponent from "../CreateTemplateComponents/BlankManager";

const style = {
    elements: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
    },
    toggle: {
        marginBottom: 16,
    },
    block: {
        maxWidth: 250,
    },
    toggleDivs: {
        marginLeft: 20,
        paddingLeft: 10,
    },
    generateButton: {
        display: "block",
        margin: "auto",
    },
    flippedToggles: {
        thumbOff: {
            backgroundColor: 'rgb(0, 188, 212)',
        },
        trackOff: {
            backgroundColor: 'rgba(0, 188, 212, 0.5)',
        },
        thumbSwitched: {
            backgroundColor: 'rgb(245, 245, 245)',
        },
        trackSwitched: {
            backgroundColor: 'rgb(189, 189, 189)',
        },
    },
    menuBox: {
        display: 'block',
        margin: '0 auto',
        marginTop: 10,
        width: 700,
        height: 200,
    },
    menuElements: {
        display: 'inline-block',
    }
};

class CreateTemplateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 4,
            secondSlider: 10,
            logged: false,
            nameBar: true,
            classBar: true,
            numberBar: true,
            groupBar: false,
        }
    }

    handleChange = (event, index, value) => this.setState({
        value
    });

    handleSecondSlider = (event, value) => {
        this.setState({secondSlider: value});
    };

    toggleNameBar(props) {
        this.setState({
            nameBar: !this.state.nameBar
        });
    }

    toggleClassBar(props) {
        this.setState({
            classBar: !this.state.classBar
        });
    }

    toggleNumberBar(props) {
        this.setState({
            numberBar: !this.state.numberBar
        });
    }

    toggleGroupBar(props) {
        this.setState({
            groupBar: !this.state.groupBar
        });
    }

    generateTemplate() {

    }

    render() {
        return (
            <div>
                <Paper zDepth={2}>
                    <div style={style.elements}> {/*избираме default-ния брой на възможните отговори*/}
                        <p>
                            Брой възможни отговори по подразбиране
                        </p>
                        <DropDownMenu style={style} value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={2} primaryText="2"/>
                            <MenuItem value={3} primaryText="3"/>
                            <MenuItem value={4} primaryText="4"/>
                            <MenuItem value={5} primaryText="5"/>
                            <MenuItem value={6} primaryText="6"/>
                            <MenuItem value={7} primaryText="7"/>
                        </DropDownMenu>
                    </div>
                    <Divider/>
                    <div style={style.elements}>
                        <p>
                            <span>
                                Чрез плъзгане изберете от колко въпроса да се състои бланката <i>(минимален брой - 1, максимален брой - 60)</i>
                            </span>
                        </p>
                        <Slider
                            min={1}
                            max={60}
                            step={1}
                            value={this.state.secondSlider}
                            onChange={this.handleSecondSlider}
                        />
                        <p>
                            <span>
                                {'Избран брой: '}
                            </span>
                            <span>
                                {this.state.secondSlider}
                            </span>
                        </p>
                    </div>

                    <Divider/>
                    <div style={style.menuBox}>{/*Menu box*/}
                        <div style={style.menuElements}> {/*Toggle elements menu LEFT*/}

                            <div style={style.toggleDivs}>
                                <div style={style.block}>
                                    <Toggle
                                        label="Име"
                                        defaultToggled={true}
                                        style={style.toggle}
                                        onToggle={() => this.toggleNameBar()}
                                    />
                                </div>
                            </div>

                            <div style={style.toggleDivs}>
                                <div style={style.block}>
                                    <Toggle
                                        label="Клас"
                                        defaultToggled={true}
                                        style={style.toggle}
                                        onToggle={() => this.toggleClassBar()}
                                    />
                                </div>
                            </div>

                            <div style={style.toggleDivs}>
                                <div style={style.block}>
                                    <Toggle
                                        label="Използвай имената на учениците"
                                        defaultToggled={false}
                                        style={style.toggle}
                                        disabled={!this.state.logged}
                                    />
                                </div>
                            </div>
                        </div>

                        <div style={style.menuElements}> {/*Toggle elements menu RIGHT*/}
                            <div style={style.toggleDivs}>
                                <div style={style.block}>
                                    <Toggle
                                        label="Номер"
                                        defaultToggled={false}
                                        labelPosition="right"
                                        style={style.toggle}
                                        thumbStyle={style.flippedToggles.thumbOff}
                                        trackStyle={style.flippedToggles.trackOff}
                                        thumbSwitchedStyle={style.flippedToggles.thumbSwitched}
                                        trackSwitchedStyle={style.flippedToggles.trackSwitched}
                                        onToggle={() => this.toggleNumberBar()}
                                    />
                                </div>
                            </div>

                            <div style={style.toggleDivs}>
                                <div style={style.block}>
                                    <Toggle
                                        label="Група"
                                        defaultToggled={false}
                                        labelPosition="right"
                                        style={style.toggle}
                                        thumbStyle={style.flippedToggles.thumbOff}
                                        trackStyle={style.flippedToggles.trackOff}
                                        thumbSwitchedStyle={style.flippedToggles.thumbSwitched}
                                        trackSwitchedStyle={style.flippedToggles.trackSwitched}
                                        onToggle={() => this.toggleGroupBar()}
                                    />
                                </div>
                            </div>
                            <div style={style.toggleDivs}>
                                <div style={style.block}>
                                    <Toggle
                                        label="Използвай номерата на учениците"
                                        defaultToggled={true}
                                        labelPosition="right"
                                        style={style.toggle}
                                        thumbStyle={style.flippedToggles.thumbOff}
                                        trackStyle={style.flippedToggles.trackOff}
                                        thumbSwitchedStyle={style.flippedToggles.thumbSwitched}
                                        trackSwitchedStyle={style.flippedToggles.trackSwitched}
                                        disabled={!this.state.logged}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div> {/*Generate template button*/}
                        <RaisedButton
                            label="Генерирай полета"
                            primary={true}
                            style={style.generateButton}
                            onClick={() => this.generateTemplate()}
                        />
                    </div>
                </Paper>
                <BlankManagerComponent/>
            </div>
        );
    }
}

export default CreateTemplateComponent;
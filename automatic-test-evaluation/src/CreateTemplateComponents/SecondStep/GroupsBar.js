import React, {Component} from 'react';
import './GroupsBar.css';
import {Divider, DropDownMenu, MenuItem, RaisedButton} from "material-ui";
import TextField from 'material-ui/TextField';

class GroupsBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups:
                [{
                    name: 'група: 1',
                    active: true,
                    newValueOfName: 'група: 1'
                }, {
                    name: 'група: 2',
                    active: true,
                    newValueOfName: 'група: 2'
                }, {
                    name: 'група: 3',
                    active: true,
                    newValueOfName: 'група: 3'
                }, {
                    name: 'група: 4',
                    active: true,
                    newValueOfName: 'група: 4'
                }, {
                    name: 'група: 5',
                    active: true,
                    newValueOfName: 'група: 5'
                }, {
                    name: 'група: 6',
                    active: true,
                    newValueOfName: 'група: 6'
                }],
            lastGroupEdited: 0
        }
    }

    handleGroupEditing(event, index, value) {
        this.setState({
            lastGroupEdited: value
        })
    }

    render() {
        return (
            <div className="main-bar">
                <div className="groups-legend">
                    <div className="groups-column">
                        <div className="single-box">
                            <div className="color-box" style={style.color_0_legend}>-</div>
                            <span>{this.state.groups[0].name}</span>
                        </div>
                        <div className="single-box">
                            <div className="color-box" style={style.color_1_legend}>-</div>
                            <span>{this.state.groups[1].name}</span>
                        </div>
                        <div className="single-box">
                            <div className="color-box" style={style.color_2_legend}>-</div>
                            <span>{this.state.groups[2].name}</span>
                        </div>
                    </div>
                    <div className="groups-column">
                        <div className="single-box">
                            <div className="color-box" style={style.color_3_legend}>-</div>
                            <span>{this.state.groups[3].name}</span>
                        </div>
                        <div className="single-box">
                            <div className="color-box" style={style.color_4_legend}>-</div>
                            <span>{this.state.groups[4].name}</span>
                        </div>
                        <div className="single-box">
                            <div className="color-box" style={style.color_5_legend}>-</div>
                            <span>{this.state.groups[5].name}</span>
                        </div>
                    </div>
                </div>


                <div className="hidden-name-change" style={this.state.editGroupDisplayStyle}>
                    <div>
                        <DropDownMenu
                            value={this.state.lastGroupEdited}
                            onChange={
                                (event, index, value) => this.handleGroupEditing(event, index, value)
                            }
                        >
                            <MenuItem value={0} primaryText={this.state.groups[0].name}/>
                            <MenuItem value={1} primaryText={this.state.groups[1].name}/>
                            <MenuItem value={2} primaryText={this.state.groups[2].name}/>
                            <MenuItem value={3} primaryText={this.state.groups[3].name}/>
                            <MenuItem value={4} primaryText={this.state.groups[4].name}/>
                            <MenuItem value={5} primaryText={this.state.groups[5].name}/>
                        </DropDownMenu>
                    </div>

                    <TextField
                        hintText="Равностранен триъгълник"
                        type="email"
                        floatingLabelText="Променете име на групата"
                        onChange={(event, newValue) => this.handleUpdateInput(event, newValue)}
                    />

                    <Divider/>

                    <div className="group-navigation-management">
                        <RaisedButton
                            label="Премахни промените"
                            primary={false}
                            onClick={() => this.discardChanges()}
                        />
                        <br/>
                        <RaisedButton
                            label="Завършване на промените по групата"
                            primary={true}
                            onClick={(event) => this.safeChanges(event)}
                        />
                    </div>
                </div>
            </div>
        );
    }

    safeChanges(event) {
        let oldGroups = this.state.groups;

        for (let i = 0; i < oldGroups.length; i++) {
            if (oldGroups[i].name !== oldGroups[i].newValueOfName) {
                oldGroups[i].name = this.state.groups[i].newValueOfName;
            }
        }

        //this.toggleMenu();

        this.setState({
            groups: oldGroups
        });
    }

    discardChanges() {
        let oldGroups = this.state.groups;

        for (let i = 0; i < this.state.groups.length; i++) {
            if (this.state.groups[i].name !== this.state.groups[i].newValueOfName) {
                oldGroups[i].newValueOfName = oldGroups[i].name;
            }
        }

        //this.toggleMenu();

        this.setState({
            groups: oldGroups
        });
    }

    handleUpdateInput(event, newValue) {
        let oldGroups = this.state.groups;

        oldGroups[this.state.lastGroupEdited].newValueOfName = newValue;

        this.setState({
            groups: oldGroups
        })
    }
}

const style = {
    color_0_legend: {
        background: '#001f3f',
    },
    color_1_legend: {
        background: '#7FDBFF',
    },
    color_2_legend: {
        background: '#3D9970'
    },
    color_3_legend: {
        background: '#01FF70'
    },
    color_4_legend: {
        background: '#FF4136'
    },
    color_5_legend: {
        background: '#85144b'
    }
};

export default GroupsBar;
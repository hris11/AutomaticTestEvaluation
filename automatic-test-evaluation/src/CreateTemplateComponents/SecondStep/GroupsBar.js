import React, {Component} from 'react';
import './GroupsBar.css';
import {Divider, DropDownMenu, MenuItem, RaisedButton} from "material-ui";
import TextField from 'material-ui/TextField';

class GroupsBar extends Component {

    render() {
        return (
            <div className="main-bar">
                <div className="groups-legend">
                    <div className="groups-column">
                        <div className="single-box">
                            <div className="color-box" style={style.color_0_legend}>-</div>
                            <span>{this.props.groups[0].name}</span>
                        </div>
                        <div className="single-box">
                            <div className="color-box" style={style.color_1_legend}>-</div>
                            <span>{this.props.groups[1].name}</span>
                        </div>
                        <div className="single-box">
                            <div className="color-box" style={style.color_2_legend}>-</div>
                            <span>{this.props.groups[2].name}</span>
                        </div>
                    </div>
                    <div className="groups-column">
                        <div className="single-box">
                            <div className="color-box" style={style.color_3_legend}>-</div>
                            <span>{this.props.groups[3].name}</span>
                        </div>
                        <div className="single-box">
                            <div className="color-box" style={style.color_4_legend}>-</div>
                            <span>{this.props.groups[4].name}</span>
                        </div>
                        <div className="single-box">
                            <div className="color-box" style={style.color_5_legend}>-</div>
                            <span>{this.props.groups[5].name}</span>
                        </div>
                    </div>
                </div>


                <div className="hidden-name-change" >
                    <div>
                        <DropDownMenu
                            value={this.props.lastGroupEdited}
                            onChange={
                                (event, index, value) => this.props.handleGroupEditing(event, index, value)
                            }
                        >
                            <MenuItem value={0} primaryText={this.props.groups[0].name}/>
                            <MenuItem value={1} primaryText={this.props.groups[1].name}/>
                            <MenuItem value={2} primaryText={this.props.groups[2].name}/>
                            <MenuItem value={3} primaryText={this.props.groups[3].name}/>
                            <MenuItem value={4} primaryText={this.props.groups[4].name}/>
                            <MenuItem value={5} primaryText={this.props.groups[5].name}/>
                        </DropDownMenu>
                    </div>
                    <div className="groups-input-handler">
                        <TextField
                            hintText="Равностранен триъгълник"
                            type="email"
                            floatingLabelText="Променете име на групата"
                            onChange={(event, newValue) => this.props.handleUpdateInput(event, newValue)}
                            fullWidth={true}
                        />
                    </div>

                    <Divider/>

                    <div className="group-navigation-management">
                        <RaisedButton
                            label="Премахни промените"
                            primary={false}
                            onClick={() => this.props.discardChanges()}
                        />
                        <br/>
                        <RaisedButton
                            label="Завършване на промените по групата"
                            primary={true}
                            onClick={(event) => this.props.safeChanges(event)}
                        />
                    </div>

                </div>
            </div>
        );
    }
}

const style = {
    color_0_legend: {
        background: 'none',
        border: '1px solid #001f3f'
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
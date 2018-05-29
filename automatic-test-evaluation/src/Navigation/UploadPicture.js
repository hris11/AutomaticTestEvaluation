import React, {Component} from 'react';
import RestCalls from "../RESTCalls/RestCalls";
import './UploadPicture.css'
import {Paper} from "material-ui";
import {CircularProgress} from "material-ui";
import {NotificationContainer} from 'react-notifications';

class UploadPicture extends Component {

    constructor(props) {
        super(props);
        this.state = {
            processing: false,
            snackMessage: ''
        };
    }

    submitForm(evt) {
        evt.preventDefault();
        
        const url = "/rest/image/upload";
        const body = new FormData(evt.target);
        let self = this;
        const callback = (response) => {
            let snackMes = 'Възникна грешка при обработката';
            if (response.ok) {
                snackMes = 'Снимката е обработена успешно';
            }
            self.setState({
                processing: false,
                snackMessage: snackMes
            });
        };

        this.setState({
            processing: true,
            snackMessage: "Снимка е изпратена успешно"
        });
        
        RestCalls.post(url, undefined, body, callback, true);
    }


    
    render() {
        let processing = <div>
            <span>В процес на обработка</span>
            <CircularProgress/>
        </div>;

        // if (this.state.snackMessage !== '') {
        //     createNotification('success', "dsa");
        // }

        return (
            <Paper zDepth={3}>
                <div className="image-upload-box">
                    <form action="" onSubmit={(evt) => this.submitForm(evt)}>
                        {/*
                            * The next part of code is taken from: https://tympanus.net/codrops/2015/09/15/styling-customizing-file-inputs-smart-way/
                        */}
                        {/*<input type="file" accept="image/*" name="file"/>
                        <input type="submit" value="качване на снимка"/>*/}
                        <input type="file" name="file" id="file-5" className="inputfile inputfile-4" data-multiple-caption="{count} files selected" multiple hidden={true}/>
                        <label htmlFor="file-5"><figure><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg></figure></label>
                        <div>
                            <input className="upload-image-button" type="submit" value="качване на снимка" disabled={this.state.processing}/>
                        </div>
                    </form>
                    <div>
                        {this.state.processing && processing}
                    </div>
                    <NotificationContainer/>
                </div>

            </Paper>
        );
    }
}

export default UploadPicture;


import React, {Component} from 'react';
import RestCalls from "../RESTCalls/RestCalls";

class UploadPicture extends Component {

    submitForm(evt) {
        evt.preventDefault();
        
        const url = "/rest/image/upload";
        const body = new FormData(evt.target);
        const callback = (response) => {
            if (response.ok) {
                console.log('image uploaded');
            }
        };
        
        RestCalls.post(url, undefined, body, callback, true);
    }
    
    render() {
        return (
            <div>
                <form action="" onSubmit={(evt) => this.submitForm(evt)}>
                    <input type="file" accept="image/*" name="file"/>
                    <input type="submit" value="качване на снимка"/>
                </form>
            </div>
        );
    }
}

export default UploadPicture;


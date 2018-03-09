import React, {Component} from 'react';
import RestCalls from "../../RESTCalls/RestCalls";

class UploadFiles extends Component {

    submitForm(evt) {
        evt.preventDefault();

        const url = `/rest/files/upload/${this.props.blankId}`;
        const body = new FormData(evt.target);

        /*const iter = body.values();
        while(true) {
            const i = iter.next();
            if (i.done) {
                break;
            }
            console.log(i);
        }*/
        let self = this;
        const callback = (response) => {
            if (response.ok) {
                self.props.handlePreviewClasses(undefined);
            }
        };

        RestCalls.post(url, undefined, body, callback, true);
    }

    render() {
        return (
            <div className="image-upload-box">
                <form action="" onSubmit={(evt) => this.submitForm(evt)}>
                    <input type="file" accept="*/*" name="files" multiple/>
                    <input type="submit" value="качване на материали"/>
                </form>
            </div>
        );
    }
}

export default UploadFiles;
import React, {Component} from 'react';

class UploadPicture extends Component {

    render() {
        return (
            <div>
                <form action="/rest/image/upload" method="post" encType="multipart/form-data">
                    <input type="file" accept="image/*" name="file"/>
                    <input type="submit" value="качване на снимка"/>
                </form>
            </div>
        );
    }
}

export default UploadPicture;


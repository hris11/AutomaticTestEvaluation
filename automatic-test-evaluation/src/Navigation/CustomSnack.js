import React from 'react';
import {Snackbar} from "material-ui";

const getSnack = (message) => {
    return (
        <div>
            <Snackbar
                open={true}
                message={message}
                autoHideDuration={4000}
            />
        </div>
    );
};

export default getSnack;


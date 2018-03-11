import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const createNotification = (type, message) => {
    return () => {
        switch (type) {
            case 'info':
                NotificationManager.info(message);
                break;
            case 'success':
                NotificationManager.success(message);
                break;
            case 'warning':
                NotificationManager.warning(message, 3000);
                break;
            case 'error':
                NotificationManager.error(message, 5000, undefined);
                break;
        }
    };
};

export default createNotification;


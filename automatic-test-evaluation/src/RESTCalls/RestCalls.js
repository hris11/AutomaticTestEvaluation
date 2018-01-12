const get = (url, headers, callback) => {

};

const post = (url, headers, body, callback) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: headers
    };

    const self = this;
    fetch(url, options)
        .then(callback)
        .catch(function (error) {
            console.error(error);
        });
};

export default {
    get: get,
    post: post
};
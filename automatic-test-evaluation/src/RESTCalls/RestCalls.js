const get = (url, callback) => {
    const options = {
        method: 'GET'
    };

    fetch(url, options)
        .then(callback)
        .catch(function (error) {
            console.error(error);
        });
};

const post = (url, headers, body, callback, fileUpload) => {

    let head = new Headers();

    if (headers) {
        Object.keys(headers).forEach(function (key) {
            head.append(key, headers[key]);
        });
    } else if(!fileUpload) {
        head.append("Content-Type", "application/json");
    }

    const options = {
        method: 'POST',
        body: fileUpload ? body : JSON.stringify(body),
        headers: head
    };

    fetch(url, options)
        .then(callback)
        .catch(function (error) {
            console.error(error);
        });
};

const deleteReq = (url, callback) => {

    const options = {
        method: 'DELETE'
    };

    fetch(url, options)
        .then(callback)
        .catch(function (error) {
            console.error(error);
        });
};

export default {
    get: get,
    post: post,
    delete: deleteReq
};

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
function test() {
    console.log("success");
}
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById('button').addEventListener('click', this.pesto);
    },

    pesto: function () {
        navigator.camera.getPicture(
            function (data) {
                console.log(data);

                var image = document.getElementById('myImage');
                image.src = "data:image/jpeg;base64," + data;

                const options = {
                    method: 'post',
                    data: { id: 12, message: 'test' },
                    headers: { Authorization: 'OAuth2: token' }
                };

                cordova.plugin.http.sendRequest('http://localhost:8080/rest/image/test', options, function(response) {
                    // prints 200
                    console.log(response.status);
                }, function(response) {
                    // prints 403
                    console.log(response.status);

                    //prints Permission denied
                    console.log(response.error);
                });
            },
            function (message) {
                alert('An Error occurred: ' + message);
            },
            {});
    },

    cameraCallback: function (imageData) {
        console.log("imageData");
        /*var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;*/
    },

    cameraError: function (message) {
        console.log("error");
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();
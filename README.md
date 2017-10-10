# Unmaintaine

### Path API on Server side & jQuery Pathner - Demo
- NodeJS >= v.4.x.x
- jQuery Pathner v.1.0.2


### Demo
Link: https://secure-river-30341.herokuapp.com/

> See https://github.com/semarketir/jquery-pathner for more details.


A simple Server side app to handle request for records or information from jquery-pathner, of course; you can use your favorite programming languages for server side.

#### Install server dependencies with NPM
```$ npm install```

#### Install client dependencies with bower
```$ npm run bower```

#### Register Application
Link: https://path.com/developers/app/new

<img width="1383" alt="1" src="https://cloud.githubusercontent.com/assets/1286932/18775305/e5ef50ea-818a-11e6-9b48-68ea0dcf8fc8.png">

<img width="1385" alt="2" src="https://cloud.githubusercontent.com/assets/1286932/18775306/e605eb02-818a-11e6-8d10-fda3e00ad5b0.png">

<img width="1388" alt="3" src="https://cloud.githubusercontent.com/assets/1286932/18775307/e61f73b0-818a-11e6-86e5-b9caa0561a04.png">


#### Set your configuration API
Open `server.js` file then change the values:
```js
var CONFIG = {
    ...
    auth: {
        clientId: '<client-id>', // insert your client id in here
        clientSecret: '<client-secret>' // insert your client secret in here
    },
    ...
};
```

Open `public/assets/js/script.js` file then change the values:
```js
...
$('.path-share-button').pathPartner({
    clientId: '<client-ide>', // insert your client id in here,
    appname: '<your app name>', // insert your app name in here
...
```

#### Run server
```$ npm start```

Then visit http://localhost:5000


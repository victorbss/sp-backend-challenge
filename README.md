# Backend Challenge

API that consume the GitHub APIs (users and repositories endpoints).

  - Notes:

    * Link for the app: https://sp-backend-challenge.herokuapp.com/api
    * Project made in node.js  
    * Using mocha/chai for write/run tests
    * Endpoints:                                          
    ```GET - /api/users?since={number}```  
    ```GET - /api/users/:username/details```  
    ```GET - /api/users/:username/repos```  

    * For localhost tests need to:
    1 - Clone this repo
    2 - Run ```npm install```   on project folder
    3 - Run ```node server.js```   on project folder
    4 - Check localhost port of the app in console
    5 - Access endpoints with the localhost path

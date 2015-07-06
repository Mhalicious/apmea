APMEA
========

Intro for the APMEA company
--------

* Open your terminal
* Change the directory to "backend" folder from our app
* Run
```
npm install
```
* Install and start MongoDB:
```
npm install sails-mongo
mongod --config /usr/local/etc/mongod.conf
```
* Create database and databaseuser with MongoDB:
```
mongo
use freelancetool
db.createUser({user: "backend", pwd: "backend1234", roles:[{role: "readWrite", db: "freelancetool"}]})
```
* Open new terminal tab and start the API in the backend folder:
```
node app.js
```

# Server
A template project for a Node.js server.  
[Chinese](README.md) | [English](README-en.md)
## Description

A RESTful API server based on Node.js + Express + Sequelize + MySQL.

## Project Structure

```
├── server.js
├── app
    ├── sql
    ├── config
    │   ├── db.default.js
    │   ├── db.mysql.js
    ├── controller
    │   ├── admin
    │   │   ├── admin.controller.js
    │   ├── turtorial
    │   │   ├── turtorial.controller.js
    ├── models
    │   ├── index.js
    │   └──  turtorial.controller.js
    ├── routes
        └── index.js
```

## Running the Project
```sh
# Install dependencies
npm install
# Start the server
node server.js
# or
nodemon .\server.js
```
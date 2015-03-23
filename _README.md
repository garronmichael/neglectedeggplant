# Wayfare

Wayfare alerts spontaneous travellers to great airfares. Users enter their origin, destination and budget - as soon as a flight is available, Wayfare alerts the user.

## Team

  - __Product Owner__: Rebekah Kwon
  - __Scrum Master__: Garron Sanchez
  - __Development Team Members__: Richard Kho, Scott Dixon

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> Some usage instructions

## Requirements

- Node 0.10.x
- Express 4.12.x
- Sequelize 2.0.x
- Sendgrid 1.6.x
- Angular 1.3.x
- Bootstrap 3.3.x

## Development

### Installing Dependencies

From within the root directory:

```sh
sudo npm install -g bower
npm install
bower install
```

### Creating a Local Database


Determine if mysql is installed by running
```sh
which mysql
```
If not, run 
```sh`
brew install mysql
```
Stop all currently running mysql servers
```sh
mysql.server stop
```
Run a local mysql server
```sh
mysql.server start 
```
Login by running 
```sh
mysql -u root 
```
Create a database
```sh
create database db
```
Exit mysql

You will need to create the following environmental variables :
```sh
CLEAR_DB_DATABASE
CLEAR_DB_USER
CLEAR_DB_PASSWORD
CLEAR_DB_SERVER
```
Local variables are create by running export varName=‘value’ in the terminal. Because I use ‘mysql -u root’ to access my local mysql database ‘db’, I will run:
```sh
export CLEAR_DB_DATABASE=‘db’
export CLEAR_DB_USER=‘root’
export CLEAR_DB_PASSWORD=‘’
export CLEAR_DB_SERVER=‘localhost’
```
Confirm these variables have been created properly by initializing node and running
```sh
process.env
```
Run app.js using nodemon. Data from the local app instance should now be saved to the local mysql database. 

**Important: You must run app.js in the same bash instance as your newly created environmental variables as these variables do not persist between separate bash instances (tabs).**

### Roadmap

View the project roadmap [here](LINK_TO_PROJECT_ISSUES)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

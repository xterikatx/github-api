#  Consuming github api 

This is an application with Frontend (**React.js & Styled-Components**) and Backend (**Node.js, Express, Postgres, Sequelize**).

- To start, clone the repository:

> git clone https://github.com/erikalopes/test-gcm.git

# How to access (backend)

 - go to the folder: `/saving-data-github` and run 

> yarn

 or 

> npm install
- configure the database configuration file called: `test-gcm\saving-data-github\src\config\database.js`
- open pgAdmin (this application comes with PostgreSQL) and create a database called `github`.
-  open a terminal in that backend folder and type `yarn sequelize db: migrate`, to create the tables in postgres

- and finally, run the command `yarn dev` to start the application.

****be aware, that to have access to the Backend application, it is necessary to have `Postman or Insomnia` as tools, and `Postgres` and `NodeJs` installed on your machine.****

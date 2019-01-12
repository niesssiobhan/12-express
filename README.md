![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Express

### Author: Siobhan Niess

### Links and Resources
* [repo](https://github.com/niesssiobhan/12-express)
* [travis](https://travis-ci.com/niesssiobhan/12-express)

### Modules
#### `server.js`
#### `routes.js`
#### `categoreis.js`
#### `products.js`
#### `schema.js`
##### Exported Values and Methods

### What to do
* Complete the server’s CRUD functionality
Implement DELETE
Implement PUT
* Create a constructor that all input for new and updated records (POST and PUT) can be run through.
This constructor should return a properly formatted and validated object (type checked, and required fields)
Only with a good object, should a write operation be allowed to occur
* Add support for a second model (with it’s own routes and database)

###### Collaborator
* George

### Setup
#### `.env` requirements
* `PORT` - Port Number 8080

#### Running the app
* you will want to start off by running `nodemon index.js`

#### Tests
* How do you run tests?
npm test server.test.js
* What assertions were made?
* What assertions need to be / should be made?
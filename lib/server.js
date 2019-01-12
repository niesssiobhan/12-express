'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

let db = [];

app.use(express.json());
app.use((req, res, next) => {
  console.log('LOG', req.method, req.path);
  next();
});

app.get('/posts', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({count, results});
});

app.get('/posts/:id', (req, res, next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});

app.post('/posts', (req, res, next) => {
  let {name, author, title, article} = req.body;
  let record = {name, author, title, article};
  record.id = db.length +1;
  db.push(record);
  res.json(record);
});

app.put('/posts/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  let record = new record(req.body);
  if(record.name) {
    record.id = id;
  }
  for(let i in db) {
    if(record.id === db[i]['id']) {
      db[i] = record;
    }
  }
  res.json(record);
});

app.delete('/posts/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  db = db.filter((record) => record.id !== id);
  res.status(200).send({});
});

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
  },
};
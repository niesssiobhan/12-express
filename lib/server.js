'use strict';

const express = require('express');
const app = express();
const uuid = require('uuid');
console.log(uuid());

const PORT = process.env.PORT || 8080;


let db = [
  {
    "name": "name",
    "aurthor": "author",
    "title": "book",
  "article": "article",
  "id": "e4865eb9-7ddd-4d6f-b5e5-3f4475d45b75"
  },
 {
   "name": "name",
   "aurthor": "author",
  "title": "book",
  "article": "article",
  "id": "bfb00eeb-464d-43db-9759-a6ab5f07bc76"
 }
 
];

app.use(express.json());

app.use( (req,res,next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

app.get('/posts', (req,res,next) => {
  let count = db.length;
  let results = db;
  res.json({count,results});
});

app.get('/posts/:id', (req,res,next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});


app.post('/posts', (req,res,next) => {
  let {name,author,title,article} = req.body;
  let record = new Implementation(name,author,title,article);
  record.id = uuid();
  db.push(record);
  res.json(record);
});

app.put('/posts/:id', (req,res,next) => {  
  for(let i = 0; i < db.length; i++){
    if(parseInt(db[i].id) === parseInt(req.params.id)){
      db[i] = req.body;
      bd[i].id = uuid();
    }
  }
  res.status(200).json(`updated object at id ${req.params.id}`);
});

app.delete('/posts/:id', (req,res,next) => {
  db = db.filter(function(ele){
    return ele.id != req.params.id;
  });
  res.status(200).json(`successfully deleted from objects ${req.params.id}`);
});

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

class Implementation{
 constructor(name, author, book, article, id){
  this.name = name;
  this.author = author;
  this.title = book;
  this.article = article;
  this.id = id;
 }
}
new Implementation();
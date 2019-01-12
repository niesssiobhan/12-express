'use strict';

class RecordTable {
  constructor (name, author, title, article, id) {
    this.name = name;
    this.author = author;
    this.title = title;
    this.article = article;
    this.id = id;
  }
}

module.exports = RecordTable;
const express = require('express');
const createError = require('http-errors');

class Book {
  constructor(author, title, year) {
    this.author = author;
    this.title = title;
    this.year = year;
  }
}

const books = [
  new Book('Martin Fowler', 'UML Distilled', 1997),
  new Book('Martin Fowler and Kent Beck', 'Refactoring', 1999),
  new Book('Joshua Bloch', 'Effective Java', 2017),
  new Book('Robert C. Martin', 'Clean Code', 2009),
];

const router = new express.Router();

function requireAcceptsJson(req, res, next) {
  if (req.accepts('json')) {
    next();
  } else {
    next(createError(406));
  }
}

// Only responds to client accepting JSON
router.all('*', requireAcceptsJson);

router.get('/', (req, res, next) => {
  res. json({ books });
});

module.exports = router;

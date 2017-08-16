const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

const books = [
    { id: 1, title: 'Book 1', description: 'This is a description for Book 1' },
    { id: 2, title: 'Book 2', description: 'This is a description for Book 2' },
    { id: 3, title: 'Book 3', description: 'This is a description for Book 3' },
    { id: 4, title: 'Book 4', description: 'This is a description for Book 4' },
    { id: 5, title: 'Book 5', description: 'This is a description for Book 5' },
    { id: 6, title: 'Book 6', description: 'This is a description for Book 6' },
    { id: 7, title: 'Book 7', description: 'This is a description for Book 7' },
    { id: 8, title: 'Book 8', description: 'This is a description for Book 8' },
    { id: 9, title: 'Book 9', description: 'This is a description for Book 9' },
    { id: 10, title: 'Book 10', description: 'This is a description for Book 10' }
]

app.get('/', (req, res) => {
    res.send('Hey you!').end();
});

app.get('/books', (req, res) => {
    res.send(books);
});

app.listen(port, () => console.log(`Running on port ${ port }`));
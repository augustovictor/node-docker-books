const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hey you!').end();
});

app.listen(port, () => console.log(`Running on port ${ port }`));
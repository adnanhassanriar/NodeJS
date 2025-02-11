const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Node.js is running on GitHub Actions!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

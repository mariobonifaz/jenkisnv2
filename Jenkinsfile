const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/api/v1/welcome', (req, res) => {
    res.send('hello world');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

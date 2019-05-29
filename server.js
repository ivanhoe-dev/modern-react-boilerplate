const express = require('express');
const path = require('path');

const app = express();

// if (process.env.NODE_ENV === 'production') {
app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
    console.log(path.join(`${__dirname}/dist/index.html`));
    res.sendFile(path.join(`${__dirname}/dist/index.html`));
});
// }

const PORT = process.env.PORT || 3001;
const HOST = 'localhost';

app.listen(PORT, () => {
    console.log('Server Started On', `${HOST}:${PORT}`);
});

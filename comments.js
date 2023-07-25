// Create Web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create app
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
// Create route
app.get('/posts/:id/comments', (req, res) => {
    res.send([{
        id: 1,
        content: 'Comment 1'
    }, {
        id: 2,
        content: 'Comment 2'
    }]);
});
// Start app
app.listen(4001, () => {
    console.log('Listening on 4001');
});
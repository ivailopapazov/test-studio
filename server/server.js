const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({status: 'ok', message: 'Hello World'});
});

app.get('/people/:id', (req, res) => {
    res.json({
        name: 'Pesho',
        id: req.params.id
    });
})

app.listen(5000, () => console.log('Listening on port 5000...'));
const express = require('express');
const app = express();
const port = 8080;

const { Pool } = require('pg');
const pool = require('pg');

app.use(express.json());

pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'favlinksAPI',
    password: 'root',
    port: 5472,
})

app.post('/api/wrestler/new', (req, res) => {
    const { wrestlerName, brand, finisher, userDescription, firstName, lastName } = req.body;

    console.log(wrestlerName, brand, finisher, userDescription, firstName, lastName);



    res.sendStatus(200)
});


app.listen(port, () => {
    console.log(`Server running on port:${port}`)
})
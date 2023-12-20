const express = require('express');
const app = express();
const port = 8080;

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'favorite-wrestlersAPI',
    password: 'root',
    port: 5472,
});

app.use(express.json());

app.get('/api/favorite-wrestlers', (req, res) => {
    pool.query('SELECT * FROM FavoriteWrestler', (error, result) => {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            res.status(200).json(result.rows);
        }
    });
});

app.post('/api/wrestler/new', (req, res) => {
    const { wrestlerName, brand, finisher, userDescription, firstName, lastName } = req.body;

    console.log(wrestlerName, brand, finisher, userDescription, firstName, lastName);

    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running on port:${port}`);
});

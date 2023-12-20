const express = require('express');
const app = express();
const port = 8080;

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'favorite-wrestlersAPI',
    password: 'root',
    port: 5432,
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

app.post('/api/favorite-wrestler/new', (req, res) => {
    const { wrestlerName, brand, finisher, userDescription } = req.body;

    pool.query(`INSERT INTO FavoriteWrestler(wrestler_name, brand, 
        wrestler_finisher, user_description) VALUES($1, $2, $3, $4)`, [wrestlerName, brand, finisher, userDescription], 
        (error, result) => {
            if(error) {
                console.log(error);
                res.sendStatus(500);
            } else {
                res.status(204).json("Accepted");
            }
    })
});

app.put('/api/wrestler/update', (req, res) => {

})

app.listen(port, () => {
    console.log(`Server running on port:${port}`);
});

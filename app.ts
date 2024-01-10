const express = require('express')
const moviesList = require('./routes/moviesList.ts');
const moviesInfo = require('./routes/moviesInfo.ts');
const actorsList = require('./routes/actorsList.ts');
const actorsInfo = require('./routes/actorsInfo.ts');

const port = 3000
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
    
});

moviesList(app)
moviesInfo(app)
actorsList(app)
actorsInfo(app)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
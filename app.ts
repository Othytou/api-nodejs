const express = require('express')

const app = express()

const moviesList = require('./routes/moviesList.ts')
const moviesInfo = require('./routes/moviesInfo.ts')
const actor = require('./routes/actor.ts')
const actorInfo = require('./routes/actorInfo.ts')

const port = 3000

app.get('/', (req, res) => {
    res.send('URL to api get : \n/movies to movies list, \n/actor to get actor data')
})

moviesList(app)
// team(app)
// driverNumber(app)
// driverInfo(app)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

// nestjs, Prima, react, angular (signal)
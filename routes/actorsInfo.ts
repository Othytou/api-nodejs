const fs = require('fs');
const path = require('path');
const request = require('request');
const dotenv = require('dotenv');

dotenv.config();

module.exports = function (app) {
    app.get('/actors/:actorName', (req, res) => {
        const actorName = req.params.actorName;
        const actorsFilePath = path.join(__dirname, '..', 'data', 'actors.json');
        const actorsData = JSON.parse(fs.readFileSync(actorsFilePath, 'utf8'));

        const moviesFilePath = path.join(__dirname, '..', 'data', 'movies.json');
        const moviesData = JSON.parse(fs.readFileSync(moviesFilePath, 'utf8'));

        const actor = actorsData.find(actor => actor.name === actorName);

        if (!actor) {
            return res.status(404).json({ error: 'Acteur non trouvé.' });
        }

        const movie = moviesData.find(movie => movie.id === actor.knows_movie.id);
        if (!movie) {
            return res.json({ message: `Cet acteur n'a pas joué dans un film de la base de données locale.` });
        }

        const apiUrl = `https://api.themoviedb.org/3/search/person?query=${actorName}&include_adult=false`;
        const apiKey = process.env.SECRETKEY;
        const headers = {
            'Authorization': `Bearer ${apiKey}`,
            'accept': 'application/json'
        };

        // Interroger l'API TMDb pour obtenir les informations sur le film
        request.get(apiUrl, { headers }, (error, response, body) => {
            if (error) {
                console.error(`Code d'état de réponse non valide : ${response ? response.statusCode : 'N/A'}`);
                return res.status(500).json({ error: 'Une erreur est survenue lors de la demande à l\'API TMDb.' });
            }
            const movieData = JSON.parse(body);
            
            // Répondre avec le message et les données du film depuis l'API TMDb
            res.json({
                message: `Cet acteur a eu le rôle principal dans le film ${movie.name} (ce film est dans la base de données locale).`,
                movieData: movieData
            });
        });
    });
};

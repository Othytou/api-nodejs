module.exports = function (app) {
    const path = require('path');

    app.get('/movies', (req, res) => {
        const filePath = path.join(__dirname, '..', 'data', 'movies.json');
        try {
            const movies = require(filePath);
            res.json(movies);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Une erreur est survenue lors de la lecture du fichier JSON.' });
        }
    });
};

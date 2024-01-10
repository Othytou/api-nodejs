module.exports = function (app) {
    const path = require('path');

    app.get('/movies', (req, res) => {
        const filePath = path.join(__dirname, '..', 'data', 'movies.json');
        try {
            const movies = require(filePath);
            const buttons = movies.map(movie => {
                const encodedName = encodeURIComponent(movie.name); // Encode le nom du film en format URI
                return `<li><a href="/movies/${encodedName}">${movie.name}</a></li>`;
            });
    
            const html = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Liste des Films</title>
                </head>
                <body>
                    <h1 style="text-align:center">Liste des Films</h1>
                    <ul>${buttons.join('')}</ul>
                </body>
                </html>
            `;
    
            res.send(html);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Une erreur est survenue lors de la lecture du fichier JSON.' });
        }
    });
    
    
};

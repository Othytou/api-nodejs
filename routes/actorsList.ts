const fs = require('fs');
const path = require('path');

module.exports = function (app) {
    // GET all actors name from local database
    app.get('/actors', (req, res) => {
        const filePath = path.join(__dirname, '..', 'data', 'actors.json');
        try {
            const actors = require(filePath);
            const buttons = actors.map(actor => {
                const encodedName = encodeURIComponent(actor.name);
                return `<li><a href="/actors/${encodedName}">${actor.name}</a></li>`;
            });
    
            const html = `
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Liste des Acteurs</title>
                </head>
                <body>
                    <h1 style="text-align:center">Liste des Acteurs</h1>
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

const express = require('express');
const request = require('request');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

module.exports = function (app) {
    // GET all movies with the contain name and their infos from Themoviedb API
    app.get('/movies/:movieName', (req, res) => {
        const movieName = req.params.movieName;
        const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false`;
        const apiKey = process.env.SECRETKEY;
        const headers = {
            'Authorization': `Bearer ${apiKey}`,
            'accept': 'application/json'
        };
        request.get(apiUrl, { headers }, (error, response, body) => {
            if (error) {
                console.error(`Code d'état de réponse non valide : ${response.statusCode}`);
                return res.status(500).json({ error: 'Une erreur est survenue lors de la demande à l\'API TMDb.' });
            }
            const movieData = JSON.parse(body);
            res.json(movieData);
        });
    });
};

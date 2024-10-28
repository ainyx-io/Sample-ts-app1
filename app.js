const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();


app.use(cors());
app.use(express.json()); // Middleware to parse JSON data


// Static valid credentials for demonstration
const validCredentials = {
    username: 'admin',
    password: 'admin'
};


// Login endpoint
app.post('/Login', (req, res) => {
    const { username, password } = req.body;
    console.log("Received credentials:", username, password); // For debugging
    // Check if provided credentials match valid credentials
    if (username === validCredentials.username && password === validCredentials.password) {
        res.send({
            token: 'test123'
        });
    } else {
        res.status(401).send('Invalid credentials');
    }
});


// Candidates endpoint to serve candidates data
app.get('/api/candidates', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'candidates.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading candidates.json:', err);
            res.status(500).send('Error reading data');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.get('/api/progressdata', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'progressdata.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading progressdata.json:', err);
            res.status(500).send('Error reading data');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.get('/api/applicants', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'applicants.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading applicants.json:', err);
            res.status(500).send('Error reading data');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.get('/api/participants', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'participants.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading participants.json:', err);
            res.status(500).send('Error reading data');
            return;
        }
        res.json(JSON.parse(data));
    });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080'));

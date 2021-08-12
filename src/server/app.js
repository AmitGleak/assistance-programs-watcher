import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import DatabaseClient from './DatabaseClient.js';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.use(bodyParser.json());

app.get('/get-programs', (req, res) => {
    const dbClient = new DatabaseClient();
    const programs = dbClient.getPrograms();
    dbClient.disconnect();
    console.log(programs);
    res.status(200).json({});
});

app.post('/update-programs', async (req, res) => {
    const dbClient = new DatabaseClient();
    await dbClient.updatePrograms(req.body.programs);
    await dbClient.disconnect();
    res.sendStatus(201);
});

app.use((err, req, res, next) => {
    console.log(err.message);
    res.sendStatus(500);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
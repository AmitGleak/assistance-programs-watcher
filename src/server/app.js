import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.get('/get-programs', (req, res) => {

});

app.post('/update-programs', (req, res) => {

});

app.use((err, req, res, next) => {
    res.sendStatus(500);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
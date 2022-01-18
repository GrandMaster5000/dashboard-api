import express from 'express';
import { router as usersRouter } from './users/users.js'

const port = 8000;
const app = express();

app.use((req, res, next) => {
    console.log('Время', Date.now());
    next();
});

app.get('/hello', (req, res) => {
    res.send('Hello!');
});

app.use('/users', usersRouter)

app.listen(port, () => {
    console.log('SERVER STARTED');
});
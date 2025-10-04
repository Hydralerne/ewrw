import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/test', (req, res) => {
    res.json({ message: 'Test' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    console.log(Date.now(), 'rrrrrrrrrrrrr', req.headers['x-real-ip'] );
    res.json({ message: 'Hello arrrrrrrrrrrrrrrrrrrrrrrrrr' });
});

app.get('/test', (req, res) => {
    res.json({ message: 'Test' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
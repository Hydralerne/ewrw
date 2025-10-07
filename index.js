import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    console.log('hiiiiiiiiiiiiiiiiiii', process.env.NEXT_PUBLIC_SOCKET_IO_Production_SERVER, req.headers['x-real-ip']);
    res.json({ message: 'Hello omaaaaaaaar' });
});

app.get('/test', (req, res) => {
    res.json({ message: 'Test' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
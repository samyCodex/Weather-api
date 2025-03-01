import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import IndexRouter from '../routes/index';

const app: Application = express();

const allowedOrigins = [
    'https://illustrious-platypus-f7576f.netlify.app/',
    'http://localhost:5174/', // Add other origins as needed
];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
};

app.use(cors(corsOptions));

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Online');
});

app.use('/api', IndexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port http://localhost:' + PORT);
});
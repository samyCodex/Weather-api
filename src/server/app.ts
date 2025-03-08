import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import IndexRouter from '../routes/index';

const app: Application = express();

const corsOptions = {
    origin: ['https://illustrious-platypus-f7576f.netlify.app', 'http://localhost:5173/'], // Replace with your frontend URL
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true, // Allow credentials (if needed)
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Enable preflight requests for all routes

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Server is Online');
});

app.use('/api', IndexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port http://localhost:' + PORT);
});
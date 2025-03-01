import express, {Application, Request, Response} from 'express';
import IndexRouter from '../routes/index';
const app: Application = express();
import Cors from 'cors';

// Initialize the cors middleware
const cors = Cors({
    origin: 'http://localhost:5174', // Your frontend URL
    methods: ['GET', 'POST', 'OPTIONS'],
});

// Helper function to run middleware
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export default async function handler(req, res) {
    // Run the CORS middleware
    await runMiddleware(req, res, cors);

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    res.status(200).json({ message: 'Weather data' });
}


app.use(express.json());
app.get('/', (req: Request, res: Response) => {
    res.send('Server is Online');
});
app.use('/api', IndexRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port http://localhost:' + PORT);
});
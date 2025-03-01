import express, {Application, Request, Response} from 'express';
import IndexRouter from '../routes/index';
import cors from 'cors'
// import '../integration/aiUtils'
const app: Application = express();

app.use(cors());
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
    res.send('Server is Online');
});
app.use('/api', IndexRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port http://localhost:' + PORT);
});
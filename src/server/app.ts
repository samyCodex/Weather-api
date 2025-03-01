import express, {Application, Request, Response} from 'express';
import IndexRouter from '../routes/index';
import cors from 'cors'
// import '../integration/aiUtils'
const app: Application = express();

app.use(cors());
export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Or replace * with your frontend URL
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
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
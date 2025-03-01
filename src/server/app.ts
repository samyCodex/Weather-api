import express, {Application, Request, Response} from 'express';
import IndexRouter from '../routes/index';
import cors from 'cors'
const app: Application = express();

const whitelist = ['http://localhost:5174', 'https://illustrious-platypus-f7576f.netlify.app']
const corsOptionsDelegate = function (req, callback) {
let corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}
app.use(express.json());
app.get('/', cors(corsOptionsDelegate), (req: Request, res: Response) => {
    res.send('Server is Online');
});
app.use('/api', cors(corsOptionsDelegate), IndexRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port http://localhost:' + PORT);
});
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../routes/index"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
// Initialize the cors middleware
const cors = (0, cors_1.default)({
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
async function handler(req, res) {
    // Run the CORS middleware
    await runMiddleware(req, res, cors);
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    res.status(200).json({ message: 'Weather data' });
}
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Server is Online');
});
app.use('/api', index_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port http://localhost:' + PORT);
});

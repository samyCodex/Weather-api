"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("../routes/index"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: ['https://illustrious-platypus-f7576f.netlify.app', 'http://localhost:5173/'], // Replace with your frontend URL
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true, // Allow credentials (if needed)
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
};
app.use((0, cors_1.default)(corsOptions));
app.options('*', (0, cors_1.default)(corsOptions)); // Enable preflight requests for all routes
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Server is Online');
});
app.use('/api', index_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port http://localhost:' + PORT);
});

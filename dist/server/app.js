"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../routes/index"));
const cors_1 = __importDefault(require("cors"));
// import '../integration/aiUtils'
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Or replace * with your frontend URL
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
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

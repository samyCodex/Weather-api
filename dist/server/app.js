"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../routes/index"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const whitelist = ['http://example1.com', 'http://example2.com'];
const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (whitelist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    }
    else {
        corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use(express_1.default.json());
app.get('/', (0, cors_1.default)(corsOptionsDelegate), (req, res) => {
    res.send('Server is Online');
});
app.use('/api', (0, cors_1.default)(corsOptionsDelegate), index_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port http://localhost:' + PORT);
});

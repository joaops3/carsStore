"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const carsRoutes_1 = __importDefault(require("./routes/carsRoutes"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./instances/db");
dotenv_1.default.config();
const server = (0, express_1.default)();
server.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
server.use(express_1.default.urlencoded({ extended: true }));
server.use((0, cors_1.default)({ origin: "http://cars-store.s3-website-us-east-1.amazonaws.com" }));
server.use(express_1.default.json());
server.use(userRoutes_1.default);
server.use(carsRoutes_1.default);
server.use((req, res) => {
    res.status(404);
    res.json({ error: "page not found" });
});
const errorHandler = (err, req, res, next) => {
    if (err.status) {
        res.status(err.status);
    }
    else {
        res.status(400);
    }
    if (err.message) {
        res.json({ error: err.message });
    }
    else {
        res.json({ error: 'bad request' });
    }
};
server.use(errorHandler);
db_1.database
    .sync()
    .then(() => { server.listen(process.env.PORT || 3000); })
    .catch((err) => { console.log(err); });

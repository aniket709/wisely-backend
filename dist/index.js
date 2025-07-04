"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const country_1 = __importDefault(require("./routes/country"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "https://wisely-frontend-e1mt-eb71xzp2c-anikets-projects-f234bada.vercel.app",
    credentials: true
}));
app.use("/api/v1", country_1.default);
const PORT = process.env.PORT || 10000;
app.get("/", (req, res) => {
    res.send("hi from derver");
});
app.listen(PORT, () => {
    console.log(`server  is ruuning on the port ${PORT}`);
});

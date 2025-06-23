"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restCountries_1 = require("../controller/restCountries");
const router = express_1.default.Router();
router.get("/:name", async (req, res) => {
    const { name } = req.params;
    console.log("[Route] Country requested:", name);
    try {
        const facts = await (0, restCountries_1.getCountryFacts)(name);
        console.log("[Route] Facts fetched:", facts);
        return res.json(facts);
    }
    catch (error) {
        console.error("Internal error occurred:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.default = router;

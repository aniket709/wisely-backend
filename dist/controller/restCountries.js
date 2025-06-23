"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountryFacts = getCountryFacts;
const axios_1 = __importDefault(require("axios"));
async function getCountryFacts(name) {
    var _a, _b, _c;
    const baseUrl = process.env.REST_COUNTRIES_API || "https://restcountries.com/v3.1/name/name";
    const url = `https://restcountries.com/v3.1/name/${encodeURIComponent(name)}?fullText=false`;
    try {
        const response = await axios_1.default.get(url, {
            timeout: 5000
        });
        console.log("[Function] API responded", response);
        if (!response.data || response.data.length === 0) {
            console.log("No country data found.");
            return null;
        }
        const data = response.data[0];
        if (!data) {
            console.warn("[Function] No data found");
        }
        return {
            name: data.name.common,
            capital: ((_a = data.capital) === null || _a === void 0 ? void 0 : _a[0]) || "N/A",
            region: data.region,
            subregion: data.subregion,
            population: data.population,
            area: data.area,
            currency: ((_b = Object.values(data.currencies || {})[0]) === null || _b === void 0 ? void 0 : _b.name) || "N/A",
            languages: Object.values(data.languages || {}).join(", "),
            timezone: ((_c = data.timezones) === null || _c === void 0 ? void 0 : _c[0]) || "N/A",
            flag: data.flags.png,
        };
    }
    catch (error) {
        console.error("Error fetching country data:", error);
        throw error;
    }
}

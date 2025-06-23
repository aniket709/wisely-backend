import axios from "axios";

interface CountryData {
  name: { common: string };
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  area: number;
  currencies: { [key: string]: { name: string } };
  languages: { [key: string]: string };
  timezones: string[];
  flags: { png: string };
}

export async function getCountryFacts(name: string) {

    const baseUrl = process.env.REST_COUNTRIES_API || "https://restcountries.com/v3.1/name";
    const url = `${baseUrl}/${encodeURIComponent(name)}?fullText=false`;
    



  try {
    const response = await axios.get<CountryData[]>(url,{
        timeout:5000
    });

    console.log("[Function] API responded",response);

    if (!response.data || response.data.length === 0) {
      console.log("No country data found.");
      return null; 
    }

    const data = response.data[0];

    if (!data){

    console.warn("[Function] No data found");
    }

    return {
      name: data.name.common,
      capital: data.capital?.[0] || "N/A",
      region: data.region,
      subregion: data.subregion,
      population: data.population,
      area: data.area,
      currency: Object.values(data.currencies || {})[0]?.name || "N/A",
      languages: Object.values(data.languages || {}).join(", "),
      timezone: data.timezones?.[0] || "N/A",
      flag: data.flags.png,
    };

  } catch (error) {
    console.error("Error fetching country data:", error);
    throw error; 
  }
}


import express ,{Request,Response} from "express"
import {getCountryFacts} from "../controller/restCountries"

const router = express.Router();




router.get("/:name", async (req: Request, res: Response): Promise<any> => {
  const { name } = req.params;
  console.log("[Route] Country requested:", name);

  try {
    const facts = await getCountryFacts(name);
    console.log("[Route] Facts fetched:", facts);
    return res.json(facts);
  } catch (error) {
    console.error("Internal error occurred:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;





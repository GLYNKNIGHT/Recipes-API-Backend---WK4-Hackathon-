//Write your router code here!
import recipes from "../libs/recipes.js";
import express from "express";

const recipesRouter = express.Router();

recipesRouter.get("/", function (req, res) {
    const responseObject = {success: true, data: recipes}
    res.json(responseObject)
  });

export default recipesRouter;

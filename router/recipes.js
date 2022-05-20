//Write your router code here!
import recipes from "../libs/recipes.js";
import express from "express";
import {
    getRecipes,
    getRecipeByID,
    createRecipe,
    updateRecipeByID,
    deleteRecipeByID
} from "../models/recipes.js";

const app = express();
const recipesRouter = express.Router();

//Gets all the recipes
recipesRouter.get("/", getRecipes);
//Gets by id
recipesRouter.get("/:id", getRecipeByID);

//Post a new recipe
recipesRouter.post("/", createRecipe);

//Put new recipe in place of old one.
recipesRouter.put("/:id", updateRecipeByID)

//Deletes recipe by ID
recipesRouter.delete("/:id", deleteRecipeByID);



export default recipesRouter;
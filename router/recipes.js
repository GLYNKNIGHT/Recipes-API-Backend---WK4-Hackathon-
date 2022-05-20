//Write your router code here!
import recipes from "../libs/recipes.js";
import express from "express";

const recipesRouter = express.Router();

//Gets all the recipes
recipesRouter.get("/", function (req, res) {
    const responseObject = {success: true, data: recipes}
    res.json(responseObject)
  });

//Gets by id
recipesRouter.get("/:id", function (req, res) {
  const recipeId = req.params.id;
  let foundRecipe = {}
  for ( let i = 0; i < recipes.length; i++){
    if (Number(recipeId) === recipes[i].id){
      foundRecipe = recipes[i];
      break;
    }
  }
  const responseObject = {success: true, data: foundRecipe}
  res.json(responseObject)
});

//Post a new recipe
recipesRouter.post("/", function (req, res) {
const newRecipe = req.body;
recipes.push(newRecipe);

const responseObject = {success: true, data: newRecipe}
res.json(responseObject)
});
export default recipesRouter;

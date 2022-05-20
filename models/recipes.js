import recipes from "../libs/recipes.js";


// GET ALL RECIPES
export const getRecipes = function(req, res) {
    const responseObject = {
        success: true,
        data: recipes
    }
    res.json(responseObject)
}

// GET A RECIPE BY ID
export const getRecipeByID = function(req, res) {
    const recipeId = req.params.id;
    let foundRecipe = {}
    for (let i = 0; i < recipes.length; i++) {
        if (Number(recipeId) === recipes[i].id) {
            foundRecipe = recipes[i];
            break;
        }
    }
    const responseObject = {
        success: true,
        data: foundRecipe
    }
    res.json(responseObject)
}

// CREATE A RECIPE
export const createRecipe = function(req, res) {
    const newRecipe = req.body;
    recipes.push(newRecipe);

    const responseObject = {
        success: true,
        data: newRecipe
    }
    res.json(responseObject)
}

// UPDATE A RECIPE BY ID
export const updateRecipeByID = function(req, res) {
    const recipeId = req.params.id;
    const upDatedRecipe = req.body;
    for (let i = 0; i < recipes.length; i++) {
        if (Number(recipeId) === recipes[i].id) {
            recipes.push(upDatedRecipe);
            break;
        }
    }
    const responseObject = {
        success: true,
        data: upDatedRecipe
    }
    res.json(responseObject)
}

// DELETE A RECIPE BY ID
export const deleteRecipeByID = function(req, res) {
    const recipeId = req.params.id;
    for (let i = 0; i < recipes.length; i++) {
        if (Number(recipeId) === recipes[i].id) {
            let deletedRecipe = recipes[i];
            recipes.splice(deletedRecipe); ///
            const responseObject = {
                success: true,
                data: deletedRecipe
            }
            res.json(responseObject)
            break;
        }
    }
}

// PATCH A RECIPE BY ID
export const patchRecipeByID = function(req, res) {
    const recipeId = req.params.id;
    const { title, ingredients, instructions, image } = req.body;
    for (let i = 0; i < recipes.length; i++) {
        if (Number(recipeId) === recipes[i].id) {
            if(title) {
                recipes[i].title = title;
                console.log(title)
            }
            if(ingredients) {
                recipes[i].ingredients = ingredients;
            }
            if(instructions) {
                recipes[i].instructions = instructions;
            }
            if(image) {
                recipes[i].image = image;
            }
        }
    }
    const responseObject = {
        success: true,
        data: recipeId
    }
    res.json(responseObject)
}
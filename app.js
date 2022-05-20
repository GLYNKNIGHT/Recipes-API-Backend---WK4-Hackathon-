import express from "express";
import { html } from "./config.js";
import recipesRouter from "./router/recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

app.use("/recipes", recipesRouter)



/* DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res) {
  res.sendFile(html);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

//import recipes to router.js -done
// router to app.js - done
//Plan write get-all 
//test the get-all
// app.use in app js
//Plan write get-by-id 
//test the get-by-id
// app.use in app js
//Plan write post (new) 
//test the post (new)
// app.use in app js
//Plan write put (change by id) 
//test the put (new)
// app.use in app js
//Plan delete (delete by id) 
//test the put (new)
// app.use in app js

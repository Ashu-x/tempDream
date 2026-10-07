import express from "express"
import { getDream } from "../controller/getDream.controller.js"
import { randomDream } from "../controller/randomDream.controller.js"
import { anonymousDream } from "../controller/anonymousDream.controller.js"
import { recentDream } from "../controller/recentDream.controller.js"


const dreamRouter = express.Router();

// THIS api IS FOR GETTING DREAM BY ITS ID WHEN SELECTED
// WHENEVER THE ANONMOUS SECOITN IS TOUCH ED THIS api IS EXECUTED

dreamRouter.get('/anonymous', anonymousDream) // return sarray of dreams
dreamRouter.get('/recent', recentDream) // return sarray of dreams

//THIS ROUTE IS RUNN A MATH RANDOM FUNCTION AND FETCH A DREA, NBY RANDOM ID
dreamRouter.get('/random', randomDream)
dreamRouter.get('/:dreamid', getDream)
// returns a single dream... under the hood we are calling getDream function

export{
    dreamRouter
}
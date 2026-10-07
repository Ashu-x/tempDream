import express from "express"
import { dreamRouter } from "./dreamRouter.js"

// ----------- FROM CONTROLLERS------------------------
import { insertNewDream } from "../controller/submitDream.controller.js"
import { searchDream } from "../controller/searchDream.controller.js"
import { userDreams } from "../controller/userDreams.controller.js"
import { relatableDreamsRouter } from "./relatableDreams.js"
import { homepageRouter } from "./homepage.js"


const router = express.Router();

router.use('/', homepageRouter)
//THIS API WILL PULL ALL DREAMS PUBLISHED BY USER AND RENDER THEM
router.get('/user', userDreams)
router.post('/submit-dream', insertNewDream)
router.use('/dream', dreamRouter)
router.use('/relatable-dreams', relatableDreamsRouter)

//THIS API IS FOR SEARCH ROUTER
router.get('/bulk', searchDream)


export {
    router as apiRouter
}
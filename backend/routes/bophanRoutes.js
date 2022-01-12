import express from 'express'
import { getBoPhanList } from '../controllers/bophanControllers.js'

const router = express.Router()

router.get("/", getBoPhanList)
// router.post("/add", addProduct)
// router.get("/search", getProductLike)
// router.get('/:Id', getProduct)


export default router
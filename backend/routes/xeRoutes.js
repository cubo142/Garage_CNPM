import express from 'express'
import { getXeList } from '../controllers/xeControllers.js'

const router = express.Router()

router.get("/", getXeList)
// router.post("/add", addProduct)
// router.get("/search", getProductLike)
// router.get('/:Id', getProduct)


export default router
import express from 'express'
import { getLoaiXeList } from '../controllers/loaixeControllers.js'

const router = express.Router()

router.get("/", getLoaiXeList)
// router.post("/add", addProduct)
// router.get("/search", getProductLike)
// router.get('/:Id', getProduct)


export default router
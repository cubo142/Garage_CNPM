import express from 'express'
import { getLoaiXeList, getLoaiXe } from '../controllers/loaixeControllers.js'

const router = express.Router()

router.get("/", getLoaiXeList)
router.get('/:Id', getLoaiXe)
// router.post("/add", addProduct)
// router.get("/search", getProductLike)



export default router
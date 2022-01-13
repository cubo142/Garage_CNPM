import express from 'express'
import { getXeList, getXe } from '../controllers/xeControllers.js'

const router = express.Router()

router.get("/", getXeList)
router.get('/:Id', getXe)
// router.post("/add", addProduct)
// router.get("/search", getProductLike)
// router.get('/:Id', getProduct)


export default router
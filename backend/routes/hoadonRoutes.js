import express from 'express'
import { getHoaDonList, getHoaDon } from '../controllers/hoadonControllers.js'

const router = express.Router()

router.get("/", getHoaDonList)
// router.post("/add", addProduct)
// router.get("/search", getProductLike)
router.get('/:Id', getHoaDon)


export default router
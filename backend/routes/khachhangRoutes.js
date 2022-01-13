import express from 'express'
import { getKhachHangList,getKhachHang } from '../controllers/khachhangControllers.js'

const router = express.Router()

router.get("/", getKhachHangList)
router.get('/:Id', getKhachHang)
// router.post("/add", addProduct)
// router.get("/search", getProductLike)
// router.get('/:Id', getProduct)


export default router
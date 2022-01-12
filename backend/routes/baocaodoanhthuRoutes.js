import express from 'express'
import { getBaoCaoDoanhThuList } from '../controllers/baocaodoanhthuControllers.js'

const router = express.Router()

router.get("/", getBaoCaoDoanhThuList)
// router.post("/add", addProduct)
// router.get("/search", getProductLike)
// router.get('/:Id', getProduct)


export default router
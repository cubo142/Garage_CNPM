import express from 'express'
import { getNhanVienList } from '../controllers/nhanvienControllers.js'

const router = express.Router()

router.get("/", getNhanVienList)
// router.post("/add", addProduct)
// router.get("/search", getProductLike)
// router.get('/:Id', getProduct)


export default router
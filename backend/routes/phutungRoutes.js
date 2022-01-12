import express from 'express'
import { getPhuTungList, addPhuTung, deletePhuTung } from '../controllers/phutungControllers.js'

const router = express.Router()

router.get("/", getPhuTungList)
router.post("/add", addPhuTung)
router.route("/delete/:id").delete(deletePhuTung)
// router.get("/search", getPhuTungLoaiXe)
// router.get('/:Id', getProduct)


export default router
import express from 'express'
import { getPhieuTiepNhanList, getPhieuTiepNhan, addPTN } from '../controllers/phieutiepnhanControllers.js'

const router = express.Router()

router.get("/", getPhieuTiepNhanList)
router.post("/add", addPTN)
// router.get("/search", getProductLike)
router.get('/:Id', getPhieuTiepNhan)


export default router
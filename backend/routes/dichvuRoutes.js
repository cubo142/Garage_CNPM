import express from 'express'
import { addDichVu, deleteDichVu, getDichVuList } from '../controllers/dichvuControllers.js'

const router = express.Router()

router.get("/", getDichVuList)
router.post("/add", addDichVu)
router.route("/delete/:id").delete(deleteDichVu)
// router.get("/search", getProductLike)
// router.get('/:Id', getProduct)


export default router
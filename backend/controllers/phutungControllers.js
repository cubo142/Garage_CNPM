import asyncHandler from "express-async-handler";
import PhuTung from "../models/phutungSchema.js";

const getPhuTungList = asyncHandler(async (req, res) => {
    const phutungs = await PhuTung.find({})
        .populate({
            path: "LoaiXe"
        })
    res.json(phutungs);
});

const addPhuTung = asyncHandler(async (req, res) => {
    const phutungs = await PhuTung.create(req.body);
    res.json(phutungs);
});
const deletePhuTung = asyncHandler(async (req, res) => {
    const phutungs = await PhuTung.findByIdAndDelete(req.params.id)
    if (phutungs) {
        res.status(200).json({ message: "Delete success" })
    } else {
        res.status(404).json({ message: "Product not found" })
    }
});

// const getUser = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.Id);
//     res.json(user);
// });

// const authUser = asyncHandler(async (req, res) => {
//     const user=await User.findOne({
//         TenTK:req.query.email,
//         MK:req.query.password
//     })
//     res.json(user)
// });
export { getPhuTungList, addPhuTung, deletePhuTung };

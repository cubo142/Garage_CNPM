import asyncHandler from "express-async-handler";
import DichVu from "../models/dichvuSchema.js";

const getDichVuList = asyncHandler(async (req, res) => {
    const dichvus = await DichVu.find({});
    res.json(dichvus);
});

const addDichVu = asyncHandler(async (req, res) => {
    const dichvus = await DichVu.create(req.body);
    res.json(dichvus);
});

const deleteDichVu = asyncHandler(async (req, res) => {
    const dichvus = await DichVu.findByIdAndDelete(req.params.id)
    if (dichvus) {
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
export { getDichVuList, addDichVu,deleteDichVu };

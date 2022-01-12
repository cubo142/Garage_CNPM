import asyncHandler from "express-async-handler";
import NhanVien from "../models/nhanvienSchema.js";

const getNhanVienList = asyncHandler(async (req, res) => {
    const nhanviens = await NhanVien.find({})
        .populate({
            path: "BoPhan"
        })
    res.json(nhanviens);
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
export { getNhanVienList };

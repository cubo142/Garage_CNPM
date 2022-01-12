import asyncHandler from "express-async-handler";
import BaoCaoDoanhThu from "../models/baocaodoanhthuSchema.js";

const getBaoCaoDoanhThuList = asyncHandler(async (req, res) => {
    const baocaodoanhthus = await BaoCaoDoanhThu.find({});
    res.json(baocaodoanhthus);
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
export { getBaoCaoDoanhThuList };

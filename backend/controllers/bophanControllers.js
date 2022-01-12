import asyncHandler from "express-async-handler";
import BoPhan from "../models/bophanSchema.js";

const getBoPhanList = asyncHandler(async (req, res) => {
    const bophans = await BoPhan.find({});
    res.json(bophans);
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
export { getBoPhanList };

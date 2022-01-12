import asyncHandler from "express-async-handler";
import PhieuTiepNhan from "../models/phieutiepnhanSchema.js";

const getPhieuTiepNhanList = asyncHandler(async (req, res) => {
    const phieutiepnhans = await PhieuTiepNhan.find({});
    res.json(phieutiepnhans);
});

//Lấy chi tiết 1 phiếu tiếp nhận 
const getPhieuTiepNhan = asyncHandler(async (req, res) => {
    const phieutiepnhan = await PhieuTiepNhan.findById(req.params.Id)
        .populate("KhachHang")
        .populate("NhanVien")
        .populate("ChiTietSuaChuaDV.DichVu")
        .populate("ChiTietSuaChuaPT.PhuTung")
        .populate("Xe")
    res.json(phieutiepnhan);
});

const addPTN = asyncHandler(async (req, res) => {
    const ptn = await PhieuTiepNhan.create(req.body);
    res.json(ptn);
});
export { getPhieuTiepNhanList, getPhieuTiepNhan, addPTN };

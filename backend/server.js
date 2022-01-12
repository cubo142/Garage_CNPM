import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Cors from 'cors';
import bodyParser from "body-parser"

import baocaodoanhthuRoutes from "./routes/baocaodoanhthuRoutes.js";
import bophanRoutes from "./routes/bophanRoutes.js";
import dichvuRoutes from "./routes/dichvuRoutes.js";
import hoadonRoutes from "./routes/hoadonRoutes.js";
import khachhangRoutes from "./routes/khachhangRoutes.js";
import loaixeRoutes from "./routes/loaixeRoutes.js";
import nhanvienRoutes from "./routes/nhanvienRoutes.js";
import phieutiepnhanRoutes from "./routes/phieutiepnhanRoutes.js";
import phutungRoutes from "./routes/phutungRoutes.js";
import xeRoutes from "./routes/xeRoutes.js";

dotenv.config();

// Kết nối đến server
connectDB();

const app = express();

app.use(express.json())

app.use(bodyParser.json())

app.use(Cors());

// cái này để test server lúc đầu thôi
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Dùng route ở đây
app.use("/api/baocaodoanhthus", baocaodoanhthuRoutes)
app.use("/api/bophans", bophanRoutes)
app.use("/api/dichvus", dichvuRoutes)
app.use("/api/hoadons", hoadonRoutes)
app.use("/api/khachhangs", khachhangRoutes)
app.use("/api/loaixes", loaixeRoutes)
app.use("/api/nhanviens", nhanvienRoutes)
app.use("/api/phieutiepnhans", phieutiepnhanRoutes)
app.use("/api/phutungs", phutungRoutes)
app.use("/api/xes", xeRoutes)


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

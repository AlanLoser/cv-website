// 引入套件
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // ⭐ 讓後端能讀 JSON（Contact 表單需要）

// ⭐ 1) 讓 Express 提供 frontend 資料夾（HTML / CSS / 圖片）
app.use(express.static(path.join(__dirname, "../frontend")));

// ⭐ 2) 首頁：回傳 frontend/index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// ⭐ 3) Contact API
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log("📩 New Contact Message:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // 你未來可改成：寄 Email / 存資料庫 / Discord 通知
    res.json({ success: true, msg: "Message received!" });
});

// 啟動伺服器
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});

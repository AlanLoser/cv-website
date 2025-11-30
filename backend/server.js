const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// 允許 JSON
app.use(express.json());

// 正確提供前端
app.use(express.static(path.join(__dirname, "../frontend")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

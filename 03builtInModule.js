// nodejs內建module
const path = require("path");


// js內建模組
console.log('dirname', __dirname);
console.log('filename', __filename);

// 使用nodejs內建module path，顯示檔案路徑
console.log(path.join(__dirname, "03builtInModule.js"));

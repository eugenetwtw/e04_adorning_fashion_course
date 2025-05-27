# 《Adorning Fashion》十天課程網站

這是基於《Adorning Fashion: The History of Costume Jewellery to Modern Times》(Deanna Farneti Cera著)設計的十天課程網站專案。

## 專案內容

- 十天完整課程內容（Markdown格式）
- 每天課程的互動式投影片（HTML格式）
- 每天課程的測驗題（HTML格式）
- 響應式網頁設計，支援桌面與行動裝置瀏覽

## 技術架構

- React + TypeScript
- Vite 構建工具
- Marked 用於Markdown渲染
- 響應式CSS設計

## 使用說明

### 開發環境設置

1. 確保已安裝Node.js (推薦v18+)和pnpm
2. 安裝依賴：
   ```
   pnpm install
   ```
3. 啟動開發伺服器：
   ```
   pnpm run dev
   ```
4. 在瀏覽器中訪問 `http://localhost:5173` 查看網站

### 建置生產版本

```
pnpm run build
```

建置後的檔案將位於 `dist` 目錄中，可部署到任何靜態網站託管服務。

## 專案結構

```
adorning_fashion_course/
├── public/
│   └── assets/           # 課程內容、投影片與測驗題
│       ├── day1_content.md
│       ├── day1_slides.html
│       ├── day1_quiz.html
│       └── ...
├── src/
│   ├── App.tsx           # 主應用程式
│   ├── App.css           # 樣式表
│   └── ...
├── package.json
└── README.md
```

## 自訂與擴展

### 修改課程內容

課程內容位於 `public/assets/` 目錄中：
- `day{n}_content.md` - 第n天的課程內容（Markdown格式）
- `day{n}_slides.html` - 第n天的投影片（HTML格式）
- `day{n}_quiz.html` - 第n天的測驗題（HTML格式）

### 修改網站樣式

網站樣式位於 `src/App.css` 文件中，可根據需要進行修改。

### 添加新功能

主應用程式位於 `src/App.tsx` 文件中，可根據需要添加新功能。

## 授權

本專案基於《Adorning Fashion: The History of Costume Jewellery to Modern Times》(Deanna Farneti Cera著)設計，僅供教育目的使用。

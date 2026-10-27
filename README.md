# 🏛️ THE MUSEUM OF VƯƠNG QUỐC MẠNH (Triển Lãm Ký Ức 27.10.2026)

Dự án triển lãm bảo tàng nghệ thuật số cao cấp được phát triển bằng **React 18 + TypeScript + Vite + Tailwind CSS**, tích hợp trình phát nhạc YouTube nền tự động, hiệu ứng ánh sáng bảo tàng 3D, cuộn ngang hành lang mượt mà và căn phòng sinh nhật tương tác.

Sẵn sàng triển khai 100% lên **Netlify**.

---

## 🚀 3 CÁCH DEPLOY LÊN NETLIFY SIÊU NHANH

### Cách 1: Netlify Drop (Nhanh nhất - Không cần cài đặt gì, chỉ mất 1 phút)
1. Đăng nhập vào [Netlify](https://app.netlify.com/).
2. Truy cập trực tiếp trang: **[app.netlify.com/drop](https://app.netlify.com/drop)**
3. Kéo và thả toàn bộ thư mục **`dist`** trong dự án này vào khung tải lên của Netlify.
4. Netlify sẽ cấp ngay một tên miền miễn phí (VD: `museum-vuongquocmanh.netlify.app`) hoạt động vĩnh viễn trên toàn cầu!

---

### Cách 2: Kết nối Git / GitHub với Netlify (Khuyên dùng cho quản lý mã nguồn chuyên nghiệp)
1. Khởi tạo Git và đẩy toàn bộ thư mục `the-museum-app` lên GitHub/GitLab:
   ```bash
   git init
   git add .
   git commit -m "feat: complete museum of vuong quoc manh with react & netlify"
   git branch -M main
   git remote add origin https://github.com/<your-username>/the-museum-of-vqm.git
   git push -u origin main
   ```
2. Trên [Netlify Dashboard](https://app.netlify.com/), chọn **Add new site** $\rightarrow$ **Import an existing project** $\rightarrow$ Chọn repository vừa tạo.
3. Dự án đã có sẵn file cấu hình chuẩn **`netlify.toml`**:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** `20`
4. Bấm **Deploy Site** và hệ thống Netlify CI/CD sẽ tự động build và deploy trong 30 giây!

---

### Cách 3: Sử dụng Netlify CLI
Nếu bạn đã có Node.js trên máy:
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

---

## 🎵 TÍCH HỢP NHẠC SINH NHẬT TỪ YOUTUBE
- **Bài hát:** *Khúc Hát Mừng Sinh Nhật [Remix] _Full HD_ - DJ - Bản*
- **YouTube Link:** [https://youtu.be/CGfM-PN3qcs](https://youtu.be/CGfM-PN3qcs?si=Ovy8Lq64xLomf42V)
- **Cơ chế:** Sử dụng YouTube IFrame Player API ẩn dưới nền, kết nối với Widget điều khiển đĩa than mạ vàng (Floating Luxury Vinyl Player) ở góc phải màn hình:
  - Tự động phát khi khách bấm nút mở cửa hoặc thổi nến sinh nhật.
  - Hiệu ứng đĩa than quay 360 độ và thanh sóng âm Equalizer chuyển động khi đang phát.
  - Nút Bật/Dừng (Play/Pause), thanh trượt chỉnh âm lượng (Volume Slider), nút Tắt tiếng (Mute).

---

## 📂 CẤU TRÚC MÃ NGUỒN REACT + TYPESCRIPT

```
the-museum-app/
├── netlify.toml               # Cấu hình deploy Netlify (Build, Cache headers, SPA Redirects)
├── package.json               # Dependencies & Scripts (React 18, Vite, Tailwind, Lucide)
├── tsconfig.json              # TypeScript strict configuration
├── vite.config.ts             # Vite build optimizer
├── tailwind.config.js         # Theme màu vàng hoàng gia, animation ngọn lửa & font
├── index.html                 # HTML template chuẩn SEO & OpenGraph
│
├── public/
│   ├── _redirects             # Hỗ trợ SPA routing trên Netlify
│   └── images/                # 10 ảnh kỷ niệm chuẩn 1:1 (anh1.png -> anh10.png)
│
├── src/
│   ├── types/
│   │   └── museum.ts          # Định nghĩa kiểu dữ liệu Exhibit, Hall, DetoxState
│   ├── data/
│   │   └── exhibitsData.tsx   # Dữ liệu 10 tác phẩm (ngày tháng, địa điểm, câu chuyện, mock)
│   ├── hooks/
│   │   └── useHorizontalScroll.ts # Hook cuộn chuột dọc thành bước đi ngang mượt mà
│   ├── components/
│   │   ├── LobbyGate.tsx          # Cổng soát vé VIP / Mật khẩu (2710 / 27102026)
│   │   ├── Navbar.tsx             # Thanh menu điều hướng các sảnh & chuyển chế độ xem
│   │   ├── HeroSection.tsx        # Banner đón khách & Sơ đồ Timeline Mini-map
│   │   ├── MuseumHallway.tsx      # Hành lang trưng bày ngang, sàn đá phản chiếu, dây nhung
│   │   ├── ExhibitCard.tsx        # Khung tranh Baroque mạ vàng 3D & Bảng đồng Louvre
│   │   ├── ArtworkModal.tsx       # Lightbox xem tranh cận cảnh, zoom & câu chuyện bí mật
│   │   ├── BirthdayCake.tsx       # Bánh sinh nhật hoàng gia SVG tương tác thổi nến & khói
│   │   ├── SecretBirthdayRoom.tsx # Phòng tương lai, 3 cam kết bản lĩnh & bức tâm thư
│   │   ├── MusicPlayer.tsx        # Trình phát nhạc đĩa than YouTube nổi bật
│   │   ├── AmbientDustCanvas.tsx  # Bụi vàng lơ lửng hoàng gia Canvas
│   │   └── FireworksCanvas.tsx    # Pháo hoa & pháo giấy mừng tuổi mới Canvas
│   ├── App.tsx                # Ứng dụng trung tâm kết nối toàn bộ State & UI
│   ├── main.tsx               # Điểm khởi chạy React
│   └── index.css              # Tinh chỉnh thanh cuộn & hiệu ứng bảo tàng
│
└── dist/                      # Bản dựng đã biên dịch sẵn sàng cho Netlify Drop
    ├── index.html
    ├── _redirects
    └── images/
```

---

## 🔑 THÔNG TIN TRẢI NGHIỆM
- **Mật mã vào cửa:** `2710` hoặc `27102026` (hoặc bấm vào nút *Thẻ VIP*).
- **Điều khiển:**
  - Lăn con lăn chuột (mouse wheel) để dạo bước dọc hành lang bảo tàng.
  - Dùng phím mũi tên `←` `→` trên bàn phím.
  - Nhấp vào bất kỳ bức tranh nào để soi kính lúp và đọc câu chuyện đằng sau.
  - Nhấp vào chiếc bánh sinh nhật ở cuối hành lang để thổi nến, kích hoạt pháo hoa và nhạc Remix chúc mừng sinh nhật!

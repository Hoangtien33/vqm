import React from 'react';
import { Exhibit, HallSection } from '../types/museum';

export const HALL_SECTIONS: Record<string, HallSection> = {
  'hall-1': {
    id: 'hall-1',
    romanNum: 'I',
    title: 'Khởi Nguồn Kèo CS2 IEM Kraków 2026',
    description: 'Nơi khởi nguồn tình anh em từ những mã CS2 100k và lòng tin tiền triệu tại giải Intel Extreme Masters Kraków 2026.'
  },
  'hall-2': {
    id: 'hall-2',
    romanNum: 'II',
    title: 'Võ Mồm Cổng Trường & Giấc Mộng Couple Ảo',
    description: 'Những pha gáy sớm cổng trường đòi chặt chân và thời kỳ ảo couple mua đồ hiệu cho anh Đại đi tán gái.'
  },
  'hall-3': {
    id: 'hall-3',
    romanNum: 'III',
    title: 'Kiếp Nạn IRL, Dream Team & Cú Đâm Sau Lưng',
    description: 'Kiếp nạn đi IRL bão táp, những đêm thức trắng vài trăm tiếng voice Discord và cú đâm sau lưng nhớ đời.'
  }
};

export const EXHIBITS_DATA: Exhibit[] = [
  {
    id: 1,
    code: "HIỆN VẬT #01",
    hallId: "hall-1",
    hallName: "Sảnh I: Khởi Nguồn Kèo CS2 IEM Kraków 2026",
    title: "Nổ Tip CSGO & Lời Hẹn Chạy Nợ Giữa Đêm",
    date: "20/02/2026 - 02/05/2026 • IEM Kraków",
    location: "Discord Chat • Giải Intel Extreme Masters",
    category: "Lưu Trữ Tin Nhắn Lịch Sử",
    imagePath: "/images/anh1.png",
    story: "Đây là lần đầu anh quen em (2/5/2026) qua việc đọc cho những dự đoán chuẩn xác từ Esport CS2 giải Intel Extreme Masters (IEM) Kraków 2026. Không hiểu sao thời đấy anh vào mỗi mã 100k mà em vẫn tin tưởng 1 thằng random trên mạng mà vào đến tận tiền triệu! Những trận đấu căng thẳng qua từng giây anh vẫn còn nhớ như G2 vs MOUZ, FURIA vs FUT, NaVi vs The MongolZ, Vitality vs PARIVISION... và câu trả lời bất hủ: 'Tao đang chạy nợ k vào đc đâu'!",
    renderMock: () => (
      <div className="bg-[#313338] text-[#dbdee1] p-4 rounded-lg text-left space-y-3 min-h-[250px] flex flex-col justify-center border border-zinc-700 shadow-inner">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-red-700 flex items-center justify-center text-white font-bold text-xs shrink-0">S1</div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-white text-sm">s1natraa</span>
              <span className="text-[11px] text-zinc-400">20/02/2026 8:00 CH</span>
            </div>
            <div className="text-sm mt-0.5"><span className="bg-[#5865f2]/30 text-[#c9cdfb] px-1 py-0.5 rounded font-semibold">@DNTT</span> nổ tip csgo đi 😭😂</div>
          </div>
        </div>
        <div className="flex items-start gap-3 pl-2 border-l-2 border-zinc-600">
          <div className="w-9 h-9 rounded-full bg-indigo-900 flex items-center justify-center text-cyan-300 font-bold text-xs shrink-0">🪽</div>
          <div>
            <div className="text-[11px] text-zinc-400 mb-0.5">↳ <span className="text-zinc-300">@s1natraa</span> nổ tip csgo đi</div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold text-white text-sm">DNTT</span>
              <span className="px-1.5 py-0.2 bg-zinc-700 rounded text-[10px] text-amber-300 font-semibold">🐝 VIT</span>
              <span className="text-[11px] text-zinc-400">20/02/2026 8:01 CH</span>
            </div>
            <div className="text-sm mt-0.5 text-zinc-100">10ph nữa vào voice</div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-red-700 flex items-center justify-center text-white font-bold text-xs shrink-0">S1</div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-white text-sm">s1natraa</span>
              <span className="text-[11px] text-zinc-400">20/02/2026 8:02 CH</span>
            </div>
            <div className="text-sm mt-0.5 text-amber-200 font-semibold">Tao đang chạy nợ k vào đc đâu</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    code: "HIỆN VẬT #02",
    hallId: "hall-1",
    hallName: "Sảnh I: Khởi Nguồn Kèo CS2 IEM Kraków 2026",
    title: "Cọc 500k Buộc Thun & Lời Cảm Ơn Sau Kèo IEM Kraków",
    date: "23/02/2026 2:49 CH",
    location: "Kênh Discord Cá Nhân",
    category: "Kỷ Vật Chiến Thắng Tiền Triệu",
    imagePath: "/images/anh2.png",
    story: "Anh chỉ dám vào mỗi mã 100k văn nghệ mà thằng em tin tưởng một ông anh random trên mạng để phang hẳn tiền triệu. Những trận cầu nghẹt thở từng giây tại IEM Kraków 2026: G2 vs MOUZ, FURIA vs FUT, NaVi vs The MongolZ, Vitality vs PARIVISION... Kết quả là bức ảnh cầm nguyên cọc 500k buộc dây thun vàng huyền thoại kèm câu 'Cảm ơn em nhá'!",
    renderMock: () => (
      <div className="bg-[#313338] text-[#dbdee1] p-4 rounded-lg text-left space-y-3 min-h-[250px] border border-zinc-700">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-red-700 flex items-center justify-center text-white font-bold text-xs">S1</div>
          <span className="font-bold text-white text-sm">s1natraa</span>
          <span className="text-[11px] text-zinc-400">23/02/2026 2:49 CH</span>
        </div>
        <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-amber-950/60 via-stone-800 to-zinc-900 p-4 border border-amber-500/30 flex flex-col items-center justify-center h-44 shadow-inner">
          <div className="transform -rotate-12 bg-gradient-to-r from-teal-800 via-teal-600 to-cyan-700 w-32 h-40 rounded shadow-2xl border-l-8 border-teal-300/60 flex flex-col items-center justify-between p-2">
            <div className="w-full h-1 bg-yellow-400 rounded-full my-2"></div>
            <div className="text-cyan-100 font-mono font-extrabold text-xs tracking-wider rotate-90">500.000 VNĐ</div>
            <div className="w-full h-1 bg-yellow-400 rounded-full my-2"></div>
          </div>
          <span className="absolute bottom-2 right-3 text-[10px] bg-black/70 px-2 py-0.5 rounded text-amber-200">Cọc 500k buộc thun vàng</span>
        </div>
        <div className="text-sm text-white font-bold">Cảm ơn em nhá</div>
      </div>
    )
  },
  {
    id: 3,
    code: "HIỆN VẬT #03",
    hallId: "hall-2",
    hallName: "Sảnh II: Võ Mồm Cổng Trường & Giấc Mộng Couple Ảo",
    title: "Chiến Thư Cổng Trường & Cú Cụp Pha Đi Vào Lòng Đất",
    date: "02/03/2026 11:30 SA",
    location: "Cổng Trường Học FPT",
    category: "Ảnh Tài Liệu Thực Địa & Võ Mồm",
    imagePath: "/images/anh3.png",
    story: "Lần đầu em biết thằng MU chung trường với em. Lúc chưa gặp mặt thì chụp ảnh cổng trường gáy căng đét: '@Why Always Me oi mày qua cổng này tao chặt chân'. Ấy thế mà sao đến lúc gặp thật ở ngoài em lại cụp pha nhanh như vậy hả Mạnh?!",
    renderMock: () => (
      <div className="bg-[#313338] text-[#dbdee1] p-4 rounded-lg text-left space-y-2.5 border border-zinc-700 min-h-[250px]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-200 text-zinc-900 flex items-center justify-center font-bold text-xs">🐱</div>
          <span className="font-bold text-purple-300 text-sm">nùn ná na na</span>
          <span className="px-1.5 py-0.5 bg-zinc-700 rounded text-[10px] text-orange-300 font-bold">🔥 FUR</span>
          <span className="text-[11px] text-zinc-400">02/03/2026 11:30 SA</span>
        </div>
        <div className="text-sm text-zinc-100">
          <span className="bg-[#5865f2]/30 text-[#c9cdfb] px-1 py-0.5 rounded font-semibold">@Why Always Me</span> oi mày qua cổng này tao chặt chân
        </div>
        <div className="rounded-lg bg-gradient-to-b from-sky-950 to-stone-900 border border-zinc-600 h-36 p-3 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="px-2 py-0.5 bg-blue-900/80 text-[10px] text-blue-200 rounded border border-blue-400/30">CỔNG TRƯỜNG</span>
            <span>🛵 🏍️ 🏢</span>
          </div>
          <div className="text-center text-xs text-amber-200 bg-black/60 py-2 rounded">
            [Ảnh cổng trường đòi chặt chân nhưng gặp thật cụp pha nhanh như chớp]
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    code: "HIỆN VẬT #04",
    hallId: "hall-2",
    hallName: "Sảnh II: Võ Mồm Cổng Trường & Giấc Mộng Couple Ảo",
    title: "Thời Kỳ Ảo Couple & Vụ Mua Quần Hiệu Đi Tán Gái Cho Anh Đại",
    date: "02/03/2026 9:16 CH",
    location: "Kênh Discord Dream Team",
    category: "Lưu Trữ Spam Đòi Kèo",
    imagePath: "/images/anh4.png",
    story: "Nhớ nhỉ những kỉ niệm em Vương Quốc Mạnh ảo couple mà giờ couple đấy còn đâu! Còn mua cả quần cho anh Đại đi tán em tbb, ảo couple đầu tư mua cho anh Đại quần áo mấy triệu bạc... Kèm chuỗi spam bắt trả kèo kinh điển!",
    renderMock: () => (
      <div className="bg-[#313338] text-[#dbdee1] p-3.5 rounded-lg text-left space-y-1.5 border border-zinc-700 min-h-[250px] font-sans">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-full bg-amber-200 text-zinc-900 flex items-center justify-center font-bold text-xs">🐱</div>
          <span className="font-bold text-purple-300 text-xs">nùn ná na na</span>
          <span className="text-[10px] text-zinc-400">02/03/2026 9:16 CH</span>
        </div>
        <div className="space-y-1 text-xs text-white font-semibold">
          <div><span className="bg-[#5865f2]/30 text-[#c9cdfb] px-1 py-0.5 rounded">@hiep fpt</span> Khoắc tay kìa thôi ông ơi trả bọn tôi kèo ăn cứt</div>
          <div><span className="bg-[#5865f2]/30 text-[#c9cdfb] px-1 py-0.5 rounded">@hiep fpt</span> Khoắc tay kìa thôi ông ơi trả bọn tôi kèo ăn cứt</div>
          <div><span className="bg-[#5865f2]/30 text-[#c9cdfb] px-1 py-0.5 rounded">@hiep fpt</span> Khoắc tay kìa thôi ông ơi trả bọn tôi kèo ăn cứt</div>
          <div><span className="bg-[#5865f2]/30 text-[#c9cdfb] px-1 py-0.5 rounded">@hiep fpt</span> Khoắc tay kìa thôi ông ơi trả bọn tôi kèo ăn cứt</div>
          <div className="text-zinc-400">v</div>
          <div><span className="bg-[#5865f2]/30 text-[#c9cdfb] px-1 py-0.5 rounded">@hiep fpt</span> Khoắc tay kìa thôi ông ơi trả bọn tôi kèo ăn cứt</div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    code: "HIỆN VẬT #05",
    hallId: "hall-2",
    hallName: "Sảnh II: Võ Mồm Cổng Trường & Giấc Mộng Couple Ảo",
    title: "Nghịch Lý Hy Sinh: Sắm Đồ Xịn Cho Anh, Mình Mặc Bộ 200k",
    date: "18/08/2026 1:45 CH",
    location: "Kênh Discord Cá Nhân",
    category: "Tự Sự Đầy Cay Đắng",
    imagePath: "/images/anh5.png",
    story: "Tiếp nối câu chuyện ảo couple: Hào phóng mua cho anh Đại quần áo mấy triệu bạc để đi tán em tbb, rồi đến lúc nhắn tin thì ngậm ngùi thú nhận: 'M dùng đồ xịn quen quần áo nhà t mặc 200 một bộ'!",
    renderMock: () => (
      <div className="bg-[#313338] text-[#dbdee1] p-5 rounded-lg text-left flex flex-col justify-center border border-zinc-700 min-h-[250px] space-y-4">
        <div className="bg-zinc-900/80 p-4 rounded-xl border border-purple-500/30 flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-200 text-zinc-900 flex items-center justify-center font-bold text-sm shrink-0">🐱</div>
          <div>
            <div className="text-xs text-purple-300 font-bold mb-1">nùn ná na na • 18/08/2026</div>
            <div className="text-base text-white font-medium">M dùng đồ xịn quen quần áo nhà t mặc 200 một bộ</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-center text-xs">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-2.5">
            <div className="text-zinc-400">Mua cho Anh Đại</div>
            <div className="text-amber-300 font-bold text-sm">Vài Triệu VNĐ 💸</div>
          </div>
          <div className="bg-zinc-800/80 border border-zinc-700 rounded-lg p-2.5">
            <div className="text-zinc-400">Đồ Mạnh mặc ở nhà</div>
            <div className="text-zinc-200 font-bold text-sm">200k / 1 bộ 👕</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    code: "HIỆN VẬT #06",
    hallId: "hall-3",
    hallName: "Sảnh III: Kiếp Nạn IRL, Dream Team & Cú Đâm Sau Lưng",
    title: "Quẹt Thẻ Tại Cửa Hàng Nike & Lời Tung Hô 'Ôi Goat Ắc Thế'",
    date: "Livestream IRL Thực Địa",
    location: "Nike Store • Quầy Thu Ngân",
    category: "Ảnh Chụp Hiện Trường Livestream",
    imagePath: "/images/anh6.jfif",
    story: "Là những kỉ niệm khó quên với cộng đồng: Lần em và cậu P dẫn anh Đại đi IRL như những chú hầu hạ — vừa lo xách đồ và thanh toán hóa đơn, đổi lại được cả kênh chat livestream tung hô: 'ôi goat ôi goat ôi goat ắc thế ắc thế'!",
    renderMock: () => (
      <div className="bg-zinc-950 rounded-lg overflow-hidden border border-zinc-700 min-h-[250px] grid grid-cols-12">
        <div className="col-span-8 bg-gradient-to-br from-orange-950/70 to-zinc-900 p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 bg-orange-600 text-white font-bold text-[10px] rounded">NIKE STORE</span>
            <span className="text-[10px] text-red-400 font-mono animate-pulse">● LIVE IRL</span>
          </div>
          <div className="text-center py-4 space-y-1">
            <div className="text-3xl">🧥👓👛</div>
            <div className="text-xs text-amber-200 font-semibold">Mạnh rút ví quẹt thẻ tại quầy</div>
            <div className="text-[10px] text-zinc-400">Hầu hạ và bao bọc trọn gói cho anh Đại</div>
          </div>
          <div className="h-2 bg-orange-500 rounded"></div>
        </div>
        <div className="col-span-4 bg-[#0e0e12] border-l border-zinc-800 p-2.5 text-left text-[10px] space-y-1">
          <div className="text-zinc-400 font-bold border-b border-zinc-800 pb-1">Kênh Chat Live</div>
          <div className="text-zinc-300 space-y-1">
            <div><span className="text-emerald-400">@Khiêm:</span> mua đai chống gù</div>
            <div><span className="text-amber-300">@TheAnh:</span> Quất 2 3 đôi</div>
            <div className="bg-amber-500/20 text-amber-200 p-1 rounded font-bold">ôi goat ôi goat ắc thế ắc thế</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    code: "HIỆN VẬT #07",
    hallId: "hall-3",
    hallName: "Sảnh III: Kiếp Nạn IRL, Dream Team & Cú Đâm Sau Lưng",
    title: "Dream Team Huyền Thoại & Vài Trăm Tiếng Treo Voice Discord",
    date: "Kỷ Nguyên Cày CS2, Valorant & LoL",
    location: "Kênh Voice 'Vòng Lặp Vô Hạn'",
    category: "Setup Góc Máy & Kỷ Nguyên Cày Game",
    imagePath: "/images/anh7.jfif",
    story: "Những kỉ niệm anh em Dream Team chơi game chung với nhau anh vẫn còn nhớ mãi: CS2, Valorant, LoL. Những buổi chơi game có những lúc chửi nhau chia hành lý, nhưng đến giờ mình vẫn chơi chung tuy nhiều người đã đi một hướng khác. Hồi đấy anh em mình toàn trong voice Discord treo đến vài trăm tiếng.",
    renderMock: () => (
      <div className="bg-[#090a0f] p-3 rounded-lg border border-zinc-700 min-h-[250px] flex flex-col justify-between">
        <div className="grid grid-cols-12 gap-2 flex-1">
          <div className="col-span-8 bg-gradient-to-b from-sky-950/70 to-zinc-900 rounded p-2.5 flex flex-col justify-between border border-sky-500/30">
            <div className="text-[9px] text-sky-200 font-bold border-b border-white/10 pb-1 flex justify-between">
              <span>COUNTER-STRIKE 2</span>
              <span className="text-emerald-300">5/5 LOBBY</span>
            </div>
            <div className="flex items-center justify-around py-3">
              <div className="text-center text-xs text-amber-200">🥷 Phoenix</div>
              <div className="text-center text-xs text-white font-bold scale-110">👑 D4rW1n</div>
              <div className="text-center text-xs text-sky-200">🥷 DOCAC</div>
            </div>
            <div className="text-[9px] text-zinc-400 text-right">LiveByMakingLove</div>
          </div>
          <div className="col-span-4 bg-[#1e1f22] rounded p-2 text-left text-[9px] border border-indigo-500/30 flex flex-col justify-between">
            <div>
              <div className="text-emerald-400 font-bold">🔊 Vòng Lặp Vô Hạn</div>
              <div className="text-amber-300 font-mono text-[8px] my-1">⏱️ Treo: 240:38:00</div>
              <div className="text-zinc-300 space-y-0.5">
                <div>🔴 Con ÁC QUỶ</div>
                <div>🟢 DNTT [VIT]</div>
                <div>🟢 kyousuke</div>
              </div>
            </div>
            <div className="text-indigo-300 text-center bg-indigo-950 p-1 rounded text-[8px]">Đã kết nối Voice</div>
          </div>
        </div>
        <div className="mt-2 h-2.5 rounded bg-gradient-to-r from-pink-500 via-emerald-400 to-cyan-500 shadow-md"></div>
      </div>
    )
  },
  {
    id: 8,
    code: "HIỆN VẬT #08",
    hallId: "hall-3",
    hallName: "Sảnh III: Kiếp Nạn IRL, Dream Team & Cú Đâm Sau Lưng",
    title: "Bữa Ăn Nạp Thể Lực Giữa Kiếp Nạn Hầu Hạ Đi IRL",
    date: "Hành Trình IRL Cùng Cậu P & Anh Đại",
    location: "Quán Ăn Ẩm Thực",
    category: "Nhiếp Ảnh Đời Thường Chân Thực",
    imagePath: "/images/anh8.png",
    story: "Cùng với bức ảnh ở tiệm Nike, đây là khoảnh khắc không thể quên trong chuyến đi IRL hầu hạ và chi tiền cho anh Đại cùng cậu P. Vừa tốn tiền vừa chạy đôn chạy đáo chỉ để đổi lấy mấy dòng chat tung hô 'ôi goat ôi goat ắc thế ắc thế'.",
    renderMock: () => (
      <div className="bg-gradient-to-br from-stone-900 via-amber-950/40 to-zinc-950 p-5 rounded-lg border border-zinc-700 min-h-[250px] flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-full bg-amber-500/20 border-2 border-amber-400/50 flex items-center justify-center text-4xl shadow-inner mb-3">
          🤓🥢
        </div>
        <div className="text-sm font-bold text-amber-200">Mạnh đeo kính gắp đồ ăn cực nhiệt</div>
        <p className="text-xs text-zinc-400 mt-2 max-w-xs">
          Nạp năng lượng sau chuỗi ngày chạy đôn chạy đáo hầu hạ và bao chi phí cùng cậu P cho anh Đại
        </p>
      </div>
    )
  },
  {
    id: 9,
    code: "HIỆN VẬT #09",
    hallId: "hall-3",
    hallName: "Sảnh III: Kiếp Nạn IRL, Dream Team & Cú Đâm Sau Lưng",
    title: "Cú Đâm Sau Lưng: '4 Con Chó Tối Qua 🌷'",
    date: "Story Nguyễn Mai Hương",
    location: "Bậc Thang Tối Muộn Ra Về",
    category: "Bài Học Ứng Xử Đắt Giá",
    imagePath: "/images/anh9.jfif",
    story: "Ảnh khắc họa rõ nét nhất chuyện em bị 'mini bell free' đâm sau lưng: Trước mặt thì chị chị em em ngọt ngào, mà ngay sau lưng lại chụp ảnh từ phía sau đăng lên Story với dòng chữ '4 Con chó tối qua 🌷'.",
    renderMock: () => (
      <div className="bg-zinc-950 p-4 rounded-lg border border-zinc-700 min-h-[250px] flex flex-col justify-between">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-pink-500/30 border border-pink-400 flex items-center justify-center text-xs">👩🏻</div>
            <div className="text-left">
              <div className="text-xs font-bold text-white">Nguyễn Mai Hương <span className="text-zinc-400 font-normal">5h 🌐</span></div>
              <div className="text-[10px] text-zinc-400">Hea2t • 因为有你, 世界变得美丽</div>
            </div>
          </div>
          <span className="text-zinc-400 text-xs">🔊 •••</span>
        </div>
        <div className="py-4 space-y-3 text-center">
          <div className="flex items-end justify-center gap-4 text-3xl">
            <span>🚶🏻‍♂️</span><span>🚶🏻‍♂️</span><span>🚶🏻‍♂️</span><span>🚶🏼‍♂️</span>
          </div>
          <div className="inline-block bg-white text-zinc-950 font-extrabold text-sm px-4 py-1.5 rounded-lg shadow-lg">
            4 Con chó tối qua 🌷
          </div>
        </div>
        <div className="text-[10px] text-zinc-500 text-center">
          [Trước mặt chị em ngọt xớt, sau lưng lên story gọi là 4 con chó]
        </div>
      </div>
    )
  },
  {
    id: 10,
    code: "HIỆN VẬT #10",
    hallId: "hall-3",
    hallName: "Sảnh III: Kiếp Nạn IRL, Dream Team & Cú Đâm Sau Lưng",
    title: "Ánh Đèn Tím Huyền Thoại & Nụ Cười Tuổi Trẻ Bồng Bột",
    date: "Kỷ Nguyên Dream Team",
    location: "Căn Phòng Neon Tím",
    category: "Chân Dung Cột Mốc Trưởng Thành",
    imagePath: "/images/anh10.png",
    story: "Những lần em đi hút bóng, hút cần cùng với anh em trong Dream Team, nhìn lại bức ảnh nằm cười dưới ánh đèn tím huyền thoại này em còn nhớ không? Khép lại những tháng ngày bồng bột, tuổi mới làm lại từ đầu thật lành mạnh nhé em trai!",
    renderMock: () => (
      <div className="bg-gradient-to-r from-indigo-950 via-purple-900 to-fuchsia-950 p-5 rounded-lg border border-purple-500/40 min-h-[250px] flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="text-5xl transform -rotate-12 mb-3">😎👓💜</div>
        <div className="text-purple-200 font-bold text-sm tracking-wide">
          ÁNH ĐÈN TÍM PHIÊU BỒNG CÙNG DREAM TEAM
        </div>
        <p className="text-xs text-purple-300/80 max-w-xs mt-2">
          Khoảnh khắc nằm cười tít mắt dưới ánh đèn neon tím huyền thoại của tuổi trẻ bồng bột
        </p>
      </div>
    )
  }
];

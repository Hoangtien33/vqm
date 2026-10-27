import React, { useState } from 'react';
import { KeyRound, Sparkles, ArrowRight, Volume2 } from 'lucide-react';

interface LobbyGateProps {
  onEnter: () => void;
  onPlayLobbyMusic?: () => void;
}

export const LobbyGate: React.FC<LobbyGateProps> = ({ onEnter, onPlayLobbyMusic }) => {
  // Empty password by default as requested
  const [passcode, setPasscode] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  const handleSubmit = (bypass = false) => {
    const trimmed = passcode.trim();
    if (bypass || trimmed === '2710' || trimmed === '27102026' || trimmed === '27/10/2026') {
      setError(false);
      setIsExiting(true);
      setTimeout(() => {
        onEnter();
      }, 650);
    } else {
      setError(true);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#070709] flex items-center justify-center p-4 overflow-y-auto transition-opacity duration-700 ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      onClick={() => onPlayLobbyMusic?.()}
    >
      <div className="max-w-xl w-full bg-[#101015] border-2 border-amber-500/40 rounded-2xl p-6 sm:p-10 shadow-[0_0_100px_rgba(212,175,55,0.22)] relative overflow-hidden my-auto select-none">
        
        {/* Baroque Corner Accents */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-amber-500/60 rounded-tl-2xl pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-amber-500/60 rounded-tr-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-amber-500/60 rounded-bl-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-amber-500/60 rounded-br-2xl pointer-events-none"></div>

        <div className="text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs uppercase tracking-[0.25em] font-semibold">
            <span>🏛️ VIỆN TRIỂN LÃM ĐẶC BIỆT • 27.10.2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wider bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent leading-tight font-serifLuxury">
            THE MUSEUM OF<br />VƯƠNG QUỐC MẠNH
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto font-sans">
            Kính mời quý khách bước vào không gian nghệ thuật số lưu giữ <strong className="text-amber-200 font-bold">10 kiệt tác để đời</strong>: từ kèo CS2 nghẹt thở tại IEM Kraków 2026, trận chiến cổng trường, đến hành trình đi IRL hầu hạ và căn phòng bí mật cuối hành lang.
          </p>

          {/* Ticket Plaque */}
          <div className="bg-[#16161f] border border-amber-500/30 rounded-xl p-5 text-left space-y-3.5 my-3 shadow-inner">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 block font-semibold font-mono">DANH TÍNH TÁC PHẨM</span>
                <span className="font-bold text-amber-300 text-base">Vương Quốc Mạnh (s1natraa / nùn ná na na)</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase tracking-widest text-zinc-500 block font-semibold font-mono">CỘT MỐC SINH NHẬT</span>
                <span className="font-mono text-amber-200 text-sm font-bold tracking-wider">27 • 10 • 2026</span>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-300 mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                  <span>Nhập mật mã mở cửa:</span>
                </span>
                <span className="text-amber-300/90 font-mono text-[11px] font-semibold">
                  (Gợi ý: 2710 hoặc 27102026)
                </span>
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Nhập 2710 tại đây..."
                  value={passcode}
                  autoFocus
                  onChange={(e) => setPasscode(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                  className="w-full bg-zinc-950 border border-amber-500/50 focus:border-amber-400 rounded-lg px-4 py-2.5 text-center font-mono text-lg tracking-widest text-amber-200 outline-none shadow-inner transition placeholder:text-zinc-600 placeholder:text-sm placeholder:tracking-normal"
                />
                <button
                  onClick={() => handleSubmit(false)}
                  className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-zinc-950 font-bold text-sm tracking-wider hover:brightness-110 active:scale-95 transition whitespace-nowrap shadow-lg shadow-amber-500/25 flex items-center gap-1.5"
                >
                  <span>MỞ CỬA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {error && (
                <p className="text-red-400 text-xs mt-2 font-medium">
                  Mật khẩu chưa chính xác! Vui lòng nhập 2710 hoặc 27102026 nhé.
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons: Only VIP Pass button, removed upload button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => handleSubmit(true)}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-xs sm:text-sm font-semibold border border-amber-500/40 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/20"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Vào Trực Tiếp Bằng Thẻ VIP Khách Mời</span>
            </button>
            {onPlayLobbyMusic && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPlayLobbyMusic();
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-amber-300 text-xs font-semibold border border-amber-500/30 transition flex items-center justify-center gap-2"
              >
                <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Bật Nhạc Sảnh Chờ ("Thank You")</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

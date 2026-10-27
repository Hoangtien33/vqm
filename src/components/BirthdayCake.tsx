import React, { useState } from 'react';
import { Wind, Flame } from 'lucide-react';

interface BirthdayCakeProps {
  onBlowSuccess: () => void;
}

export const BirthdayCake: React.FC<BirthdayCakeProps> = ({ onBlowSuccess }) => {
  const [candlesLit, setCandlesLit] = useState<boolean>(true);
  const [showSmoke, setShowSmoke] = useState<boolean>(false);

  const handleBlow = () => {
    if (!candlesLit) return;
    setCandlesLit(false);
    setShowSmoke(true);
    setTimeout(() => setShowSmoke(false), 2400);
    onBlowSuccess();
  };

  const handleRelight = () => {
    setCandlesLit(true);
    setShowSmoke(false);
  };

  return (
    <div className="bg-[#121218] border border-amber-500/30 rounded-2xl p-6 sm:p-8 text-center flex flex-col items-center justify-between relative overflow-hidden shadow-2xl select-none">
      
      {/* Title */}
      <div className="space-y-1">
        <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-mono">
          CỘT MỐC SINH NHẬT • 27.10.2026
        </div>
        <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
          CHIẾC BÁNH SINH NHẬT VƯƠNG QUỐC MẠNH
        </h3>
      </div>

      {/* Interactive Cake SVG Area */}
      <div
        className="relative my-6 cursor-pointer"
        onClick={handleBlow}
        title="Nhấp vào bánh để thổi nến đón tuổi mới!"
      >
        {/* Glow behind candles */}
        {candlesLit && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-56 h-36 bg-amber-400/30 blur-3xl rounded-full transition-opacity duration-700 pointer-events-none"></div>
        )}

        {/* Smoke Puff when extinguished */}
        {showSmoke && (
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-2xl animate-bounce pointer-events-none">
            💨 ☁️ 💭
          </div>
        )}

        <svg width="280" height="220" viewBox="0 0 280 220" className="mx-auto drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]">
          {/* Golden Stand Plate */}
          <ellipse cx="140" cy="202" rx="125" ry="16" fill="#1c1917" stroke="#d4af37" strokeWidth="2.5" />
          <ellipse cx="140" cy="198" rx="115" ry="12" fill="#292524" stroke="#fef08a" strokeWidth="1" />

          {/* Bottom Tier (Chocolate & Gold) */}
          <rect x="45" y="130" width="190" height="66" rx="14" fill="#3b2316" stroke="#d4af37" strokeWidth="2" />
          {/* Frosting Drips */}
          <path d="M45 140 Q60 158 75 140 Q90 160 105 140 Q120 158 135 140 Q150 160 165 140 Q180 158 195 140 Q210 160 225 140 Q230 148 235 140 L235 130 L45 130 Z" fill="#fef3c7" />
          <text x="140" y="174" textAnchor="middle" fill="#fde68a" fontFamily="'Cinzel', serif" fontWeight="bold" fontSize="14" letterSpacing="3">27 • 10 • 2026</text>

          {/* Top Tier */}
          <rect x="75" y="78" width="130" height="56" rx="12" fill="#58291a" stroke="#d4af37" strokeWidth="2" />
          {/* Top Frosting Drips */}
          <path d="M75 88 Q90 102 105 88 Q122 105 140 88 Q158 105 175 88 Q190 102 205 88 L205 78 L75 78 Z" fill="#fffbeb" />
          <text x="140" y="116" textAnchor="middle" fill="#ffffff" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="bold" fontSize="12" letterSpacing="1">QUỐC MẠNH</text>

          {/* 3 Candles Sticks */}
          <g>
            <rect x="102" y="38" width="11" height="42" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />
            <line x1="107.5" y1="38" x2="107.5" y2="31" stroke="#52525b" strokeWidth="2.5" strokeLinecap="round" />

            <rect x="134.5" y="30" width="11" height="50" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />
            <line x1="140" y1="30" x2="140" y2="23" stroke="#52525b" strokeWidth="2.5" strokeLinecap="round" />

            <rect x="167" y="38" width="11" height="42" rx="3" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.2" />
            <line x1="172.5" y1="38" x2="172.5" y2="31" stroke="#52525b" strokeWidth="2.5" strokeLinecap="round" />
          </g>

          {/* Dynamic Flickering Flames */}
          {candlesLit && (
            <g>
              <g className="animate-flame" style={{ transformOrigin: '107.5px 31px' }}>
                <path d="M107.5 10 C99 21 101 31 107.5 31 C114 31 116 21 107.5 10 Z" fill="#f97316" />
                <path d="M107.5 16 C104 23 105 30 107.5 30 C110 30 111 23 107.5 16 Z" fill="#fef08a" />
              </g>

              <g className="animate-flame" style={{ transformOrigin: '140px 23px' }}>
                <path d="M140 2 C131 13 133 23 140 23 C147 23 149 13 140 2 Z" fill="#f97316" />
                <path d="M140 8 C136 15 137 22 140 22 C143 22 144 15 140 8 Z" fill="#fef08a" />
              </g>

              <g className="animate-flame" style={{ transformOrigin: '172.5px 31px' }}>
                <path d="M172.5 10 C164 21 166 31 172.5 31 C179 31 181 21 172.5 10 Z" fill="#f97316" />
                <path d="M172.5 16 C169 23 170 30 172.5 30 C175 30 176 23 172.5 16 Z" fill="#fef08a" />
              </g>
            </g>
          )}
        </svg>
      </div>

      <p className="text-sm text-amber-200/90 mb-5 max-w-md">
        {candlesLit
          ? '✨ Nhấp vào bánh hoặc bấm nút bên dưới để thổi nến đón tuổi mới!'
          : '🎉 CHÚC MỪNG SINH NHẬT VƯƠNG QUỐC MẠNH! Tuổi mới tỉnh ngộ, bản lĩnh vững vàng và làm ăn thành công!'}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {candlesLit ? (
          <button
            onClick={handleBlow}
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-zinc-950 font-extrabold text-sm shadow-xl shadow-amber-500/25 hover:brightness-110 active:scale-95 transition flex items-center gap-2"
          >
            <Wind className="w-4 h-4" />
            <span>THỔI NẾN & BẮN PHÁO HOA</span>
          </button>
        ) : (
          <button
            onClick={handleRelight}
            className="px-5 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-300 text-xs font-bold border border-amber-500/30 transition flex items-center gap-1.5"
          >
            <Flame className="w-4 h-4 text-amber-400" />
            <span>Thắp Lại Nến</span>
          </button>
        )}
      </div>

    </div>
  );
};

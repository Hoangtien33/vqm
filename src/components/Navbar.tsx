import React from 'react';
import { Cake, LayoutGrid, Footprints, Compass } from 'lucide-react';

interface NavbarProps {
  onJumpToHall: (hallId: string) => void;
  onScrollToFinal: () => void;
  isGridView: boolean;
  onToggleLayout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onJumpToHall,
  onScrollToFinal,
  isGridView,
  onToggleLayout,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#09090e]/95 backdrop-blur-md border-b border-amber-500/25 px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand Emblem */}
        <div 
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => onJumpToHall('hallway-start')}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-amber-600/30 to-amber-900/30 border border-amber-500/50 flex items-center justify-center text-amber-300 font-cinzel font-bold text-xl shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            M
          </div>
          <div>
            <h2 className="font-cinzel text-sm sm:text-base font-bold tracking-wider bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              THE MUSEUM OF VƯƠNG QUỐC MẠNH
            </h2>
            <p className="text-[11px] text-zinc-400">Đại Triển Lãm Ký Ức • Sinh Nhật Tuổi Mới 27.10.2026</p>
          </div>
        </div>

        {/* Navigation & Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <button
            onClick={() => onJumpToHall('hall-1')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900/90 hover:bg-amber-500/20 text-zinc-300 hover:text-amber-200 border border-zinc-800 transition"
          >
            Sảnh I: Kèo IEM CS2
          </button>
          <button
            onClick={() => onJumpToHall('hall-2')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900/90 hover:bg-amber-500/20 text-zinc-300 hover:text-amber-200 border border-zinc-800 transition"
          >
            Sảnh II: Cổng Trường & Couple
          </button>
          <button
            onClick={() => onJumpToHall('hall-3')}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-900/90 hover:bg-amber-500/20 text-zinc-300 hover:text-amber-200 border border-zinc-800 transition"
          >
            Sảnh III: Kiếp Nạn IRL & Dream Team
          </button>
          <button
            onClick={onScrollToFinal}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-zinc-950 shadow-md shadow-amber-500/20 hover:brightness-110 active:scale-95 transition flex items-center gap-1.5"
          >
            <Cake className="w-3.5 h-3.5" />
            <span>Phòng Tương Lai & Thổi Nến</span>
          </button>

          {/* Hallway Walk vs Overview Grid Toggle */}
          <button
            onClick={onToggleLayout}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-amber-300 border border-amber-500/30 transition flex items-center gap-1.5"
            title="Chuyển chế độ xem"
          >
            {isGridView ? (
              <>
                <Footprints className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Hành Lang Ngang</span>
              </>
            ) : (
              <>
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Toàn Cảnh Lưới</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

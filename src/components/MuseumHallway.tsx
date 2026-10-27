import React, { useRef } from 'react';
import { Cake, ArrowRight } from 'lucide-react';
import { Exhibit } from '../types/museum';
import { HALL_SECTIONS } from '../data/exhibitsData';
import { ExhibitCard } from './ExhibitCard';
import { useHorizontalScroll } from '../hooks/useHorizontalScroll';

interface MuseumHallwayProps {
  exhibits: Exhibit[];
  isGridView: boolean;
  onOpenModal: (index: number) => void;
  onScrollToFinal: () => void;
}

export const MuseumHallway: React.FC<MuseumHallwayProps> = ({
  exhibits,
  isGridView,
  onOpenModal,
  onScrollToFinal,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useHorizontalScroll(containerRef, isGridView);

  let lastHallId = '';

  return (
    <main className="relative z-10 flex-1 flex flex-col justify-between overflow-hidden">
      {/* Horizontal Museum Wall */}
      <div
        ref={containerRef}
        id="museumHallwayContainer"
        className={`select-none px-6 sm:px-16 pt-16 pb-14 min-h-[720px] transition-all ${
          isGridView
            ? 'flex flex-wrap justify-center gap-10 overflow-y-auto'
            : 'flex items-stretch gap-12 sm:gap-16 overflow-x-auto gallery-scroll-container'
        }`}
      >
        {exhibits.map((item, index) => {
          const showDivider = item.hallId !== lastHallId;
          if (showDivider) {
            lastHallId = item.hallId;
          }
          const hallInfo = HALL_SECTIONS[item.hallId];

          return (
            <React.Fragment key={item.id}>
              {/* Hall Section Divider Banner */}
              {showDivider && hallInfo && (
                <div
                  id={hallInfo.id}
                  className="shrink-0 w-72 sm:w-84 flex flex-col justify-center items-center text-center p-7 rounded-2xl bg-gradient-to-b from-[#181622] via-[#101016] to-[#0a0a0e] border border-amber-500/35 shadow-[0_0_40px_rgba(0,0,0,0.85)] my-auto h-[500px]"
                >
                  <div className="w-14 h-14 rounded-full bg-amber-500/15 border-2 border-amber-500/50 flex items-center justify-center text-amber-300 font-cinzel font-bold text-2xl mb-4 shadow-inner">
                    {hallInfo.romanNum}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold mb-2 font-mono">
                    KHU TRIỂN LÃM
                  </div>
                  <h3 className="font-cinzel text-xl font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent leading-snug mb-4">
                    {hallInfo.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-4"></div>
                  <p className="text-xs text-zinc-400 leading-relaxed max-w-xs font-sans">
                    {hallInfo.description}
                  </p>
                  <div className="mt-6 text-[11px] text-amber-300/80 font-mono tracking-wider flex items-center gap-1.5">
                    <span>DẠO BƯỚC THƯỞNG LÃM</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}

              {/* Artwork Masterpiece Card */}
              <ExhibitCard
                item={item}
                onOpenModal={() => onOpenModal(index)}
              />
            </React.Fragment>
          );
        })}

        {/* End of Hallway Portal to Secret Birthday Room */}
        <div className="shrink-0 w-80 sm:w-96 flex flex-col justify-center items-center text-center p-8 rounded-2xl bg-gradient-to-br from-amber-500/25 via-[#181510] to-[#0a0a0f] border-2 border-amber-500/60 shadow-[0_0_60px_rgba(212,175,55,0.25)] my-auto h-[500px]">
          <div className="text-5xl mb-4 animate-bounce">🎂</div>
          <span className="text-[11px] uppercase tracking-[0.25em] text-amber-300 font-bold font-mono">
            ĐÍCH ĐẾN HÀNH LANG
          </span>
          <h3 className="font-cinzel text-2xl font-bold bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent mt-2 mb-3">
            CĂN PHÒNG TƯƠNG LAI & BỨC TÂM THƯ
          </h3>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-sans">
            Bạn đã thưởng lãm trọn vẹn 10 bức tranh kỷ niệm của Vương Quốc Mạnh. Hãy bước vào căn phòng cuối cùng để thổi nến đón tuổi mới!
          </p>
          <button
            onClick={onScrollToFinal}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-zinc-950 font-extrabold text-sm shadow-xl hover:brightness-110 active:scale-95 transition flex items-center gap-2"
          >
            <Cake className="w-4 h-4" />
            <span>BƯỚC VÀO PHÒNG SINH NHẬT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Velvet Stanchion Rope & Polished Marble Floor Reflection */}
      <div className="bg-gradient-to-b from-[#08080a]/90 via-[#0e0e12]/95 to-[#121218] border-t border-amber-500/30 py-5 px-6 relative z-20 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-3.5 h-9 bg-gradient-to-r from-[#8a6412] via-[#fbf5b7] to-[#8a6412] rounded shadow-md shrink-0"></div>
            <div className="h-1.5 bg-gradient-to-r from-[#580c10] via-[#7f1d1d] to-[#580c10] rounded flex-1 sm:w-60 shadow-md"></div>
            <div className="w-3.5 h-9 bg-gradient-to-r from-[#8a6412] via-[#fbf5b7] to-[#8a6412] rounded shadow-md shrink-0"></div>
            <span className="text-xs text-zinc-400 uppercase tracking-widest ml-3 font-sans">
              Khu vực bảo tồn kỷ niệm • Nhấp chuột vào tranh để xem chú thích
            </span>
          </div>
          <div className="text-xs text-amber-300 font-mono tracking-widest">
            TIẾN ĐỘ THAM QUAN: <span className="text-white font-bold">{exhibits.length} / {exhibits.length} HIỆN VẬT</span>
          </div>
        </div>
      </div>
    </main>
  );
};

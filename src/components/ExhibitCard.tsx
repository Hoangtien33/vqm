import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Exhibit } from '../types/museum';

interface ExhibitCardProps {
  item: Exhibit;
  onOpenModal: () => void;
}

export const ExhibitCard: React.FC<ExhibitCardProps> = ({
  item,
  onOpenModal,
}) => {
  const [imageError, setImageError] = useState<boolean>(false);

  return (
    <div
      id={`exhibit-${item.id}`}
      className="shrink-0 w-[350px] sm:w-[440px] flex flex-col justify-between relative pt-8 group select-none"
    >
      {/* Overhead Ceiling Track Spotlight Fixture & Beam */}
      <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-16 h-4 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded border border-zinc-600 shadow-lg z-10">
        <div className="absolute -bottom-1 left-1/4 w-1/2 h-1.5 bg-yellow-100 rounded-full shadow-[0_0_18px_6px_rgba(254,240,138,0.9)]"></div>
      </div>
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[440px] h-[580px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(254,243,199,0.15)_0%,rgba(212,175,55,0.04)_50%,transparent_72%)] pointer-events-none z-0"></div>

      {/* Gilded Baroque Museum Frame */}
      <div
        onClick={onOpenModal}
        className="relative bg-[#0d0d10] p-3 rounded shadow-[0_0_0_1px_#463414,0_0_0_4px_#1b160e,0_0_0_8px_#967026,0_0_0_11px_#fceda2,0_0_0_14px_#6e4e13,0_25px_50px_-10px_rgba(0,0,0,0.95),0_0_45px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_0_1px_#5e471d,0_0_0_4px_#261f14,0_0_0_8px_#c89c37,0_0_0_11px_#fff3b8,0_0_0_14px_#91681a,0_35px_70px_-10px_rgba(0,0,0,0.98),0_0_65px_rgba(212,175,55,0.35)] group-hover:-translate-y-2 group-hover:scale-[1.015] transition-all duration-500 cursor-pointer z-10"
        title="Nhấp để ngắm cận cảnh và đọc câu chuyện"
      >
        <div className="flex items-center justify-between mb-2 px-1">
          <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 font-bold">
            {item.code}
          </span>
          <span className="text-[10px] text-zinc-400 font-mono truncate max-w-[210px]">
            {item.date}
          </span>
        </div>

        {/* Inner Velvet Matting & Canvas */}
        <div className="bg-[radial-gradient(circle_at_center,#1b1b22_0%,#0a0a0d_100%)] p-2.5 rounded border-2 border-[#5a4116] shadow-[inset_0_0_20px_rgba(0,0,0,0.9)] overflow-hidden relative">
          {!imageError ? (
            <img
              src={item.imagePath}
              alt={item.title}
              onError={() => setImageError(true)}
              className="w-full h-[260px] object-cover object-center block bg-zinc-950 transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div>{item.renderMock()}</div>
          )}

          {/* Hover Zoom Prompt Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-end p-4 text-center">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-zinc-950 font-extrabold text-xs shadow-xl transform translate-y-2 group-hover:translate-y-0 transition duration-300 flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5" />
              <span>Ngắm Tranh & Đọc Chú Thích</span>
            </span>
          </div>
        </div>
      </div>

      {/* Louvre Brass Plaque Below Frame - Removed change image button */}
      <div
        onClick={onOpenModal}
        className="mt-6 rounded-xl p-4 sm:p-5 bg-gradient-to-br from-[#2b2518] via-[#15130d] to-[#2b2518] border border-[#b38728] shadow-[0_8px_20px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,237,160,0.4),inset_0_0_15px_rgba(0,0,0,0.8)] hover:border-[#fceda2] hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(0,0,0,0.9),0_0_20px_rgba(212,175,55,0.25)] transition duration-300 cursor-pointer z-10 relative"
      >
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[10px] font-mono text-amber-400 font-bold tracking-widest">
            {item.code}
          </span>
          <span className="text-[10px] font-mono text-zinc-400">
            {item.category}
          </span>
        </div>
        <h4 className="font-serifLuxury text-lg font-bold text-amber-100 mb-2 line-clamp-1 group-hover:text-amber-300 transition">
          {item.title}
        </h4>
        <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed line-clamp-3 select-none font-sans">
          "{item.story}"
        </p>
      </div>
    </div>
  );
};

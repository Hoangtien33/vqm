import React from 'react';
import { ChevronLeft, ChevronRight, ImageUp } from 'lucide-react';
import { Exhibit } from '../types/museum';

interface HeroSectionProps {
  exhibits: Exhibit[];
  onWalk: (deltaX: number) => void;
  onScrollToExhibit: (id: number) => void;
  onBulkUpload: (files: FileList) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  exhibits,
  onWalk,
  onScrollToExhibit,
  onBulkUpload,
}) => {
  return (
    <section id="hallway-start" className="relative z-10 border-b border-amber-500/20 bg-gradient-to-b from-[#14131b] via-[#0c0c10] to-[#08080a] py-8 px-4 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs text-amber-400 uppercase tracking-widest font-semibold">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>HÀNH TRÌNH TRIỂN LÃM ĐỘC QUYỀN • DÀNH TẶNG VƯƠNG QUỐC MẠNH</span>
          </div>
          <h1 className="font-serifLuxury text-2xl sm:text-4xl text-white font-bold leading-tight">
            Hành Lang Ký Ức: <span className="italic bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent">10 Kiệt Tác Đi Cùng Năm Tháng</span>
          </h1>
          <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed">
            Hãy <strong className="text-amber-200">cuộn chuột (mouse wheel)</strong> hoặc bấm phím mũi tên để dạo bước dọc hành lang bảo tàng. 
            Nhấp vào bất kỳ bức tranh nào để ngắm chi tiết qua kính lúp và thưởng thức câu chuyện đằng sau!
          </p>
        </div>

        {/* Horizontal Walking Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onWalk(-550)}
            className="px-4 py-3 rounded-xl bg-zinc-900/90 hover:bg-amber-500/20 border border-amber-500/30 text-amber-200 text-sm font-semibold flex items-center gap-2 transition active:scale-95"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Lùi lại</span>
          </button>
          <button
            onClick={() => onWalk(550)}
            className="px-5 py-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-200 text-sm font-semibold flex items-center gap-2 transition active:scale-95 shadow-lg shadow-amber-500/15"
          >
            <span>Bước tiếp</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <label
            className="px-3.5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-medium cursor-pointer transition flex items-center gap-1.5"
            title="Tải ảnh mới từ máy tính"
          >
            <ImageUp className="w-4 h-4 text-zinc-400" />
            <span>Thay 10 ảnh</span>
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => e.target.files && onBulkUpload(e.target.files)}
            />
          </label>
        </div>
      </div>

      {/* Interactive Mini-map timeline strip */}
      <div className="max-w-6xl mx-auto mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 overflow-x-auto gap-4 pb-2">
        <span className="text-amber-300 font-mono shrink-0 uppercase tracking-wider text-[11px] font-bold">
          Sơ Đồ Phòng Tranh:
        </span>
        <div className="flex items-center gap-2 shrink-0">
          {exhibits.map((item) => (
            <button
              key={item.id}
              onClick={() => onScrollToExhibit(item.id)}
              className="w-6 h-6 rounded-md bg-zinc-800 hover:bg-amber-500/30 text-[10px] font-mono text-zinc-300 hover:text-amber-200 border border-zinc-700 flex items-center justify-center transition"
              title={item.title}
            >
              {item.id}
            </button>
          ))}
        </div>
        <span className="text-[11px] text-zinc-500 font-mono shrink-0">
          Lăn chuột dọc để đi ngang ➔
        </span>
      </div>
    </section>
  );
};

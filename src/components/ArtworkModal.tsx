import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ImagePlus, MapPin, Calendar, FileText } from 'lucide-react';
import { Exhibit } from '../types/museum';

interface ArtworkModalProps {
  item: Exhibit | null;
  currentIndex: number;
  totalCount: number;
  customSrc?: string;
  onClose: () => void;
  onNavigate: (direction: number) => void;
  onReplaceImage: (file: File) => void;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({
  item,
  currentIndex,
  totalCount,
  customSrc,
  onClose,
  onNavigate,
  onReplaceImage,
}) => {
  const [imageError, setImageError] = useState<boolean>(false);

  useEffect(() => {
    setImageError(false);
  }, [item?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(1);
      if (e.key === 'ArrowLeft') onNavigate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNavigate]);

  if (!item) return null;

  const activeSrc = customSrc || item.imagePath;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onReplaceImage(e.target.files[0]);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto select-none"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="max-w-5xl w-full bg-[#121219] border-2 border-amber-500/40 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.98)] my-auto relative animate-fadeIn">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#181822] border-b border-amber-500/20">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold">
              {item.code}
            </span>
            <span className="text-xs text-zinc-400 uppercase tracking-wider hidden sm:inline">
              {item.hallName}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] text-zinc-500 hidden sm:inline font-mono">
              Nhấn ESC để đóng • Phím ← → để chuyển tranh
            </span>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center justify-center text-lg font-bold transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Masterpiece Visual Display */}
          <div className="lg:col-span-7 bg-[#09090d] p-5 sm:p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-zinc-800 relative">
            <div className="w-full rounded-lg overflow-hidden border-2 border-amber-500/40 shadow-2xl bg-black group relative cursor-zoom-in">
              {!imageError ? (
                <img
                  src={activeSrc}
                  alt={item.title}
                  onError={() => setImageError(true)}
                  className="w-full max-h-[480px] object-contain mx-auto bg-black block transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="p-3">{item.renderMock()}</div>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between w-full gap-2">
              <span className="text-[11px] font-mono text-zinc-500 truncate flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5" />
                <span>Tệp: {item.imagePath}</span>
              </span>
              <label className="px-3 py-1.5 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-medium cursor-pointer transition shrink-0 flex items-center gap-1.5">
                <ImagePlus className="w-3.5 h-3.5" />
                <span>Thay ảnh cho khung này</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            </div>
          </div>

          {/* Plaque Narrative Details */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs text-amber-400 font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </span>
                <span className="text-[10px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded border border-zinc-700 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{item.location}</span>
                </span>
              </div>

              <h3 className="font-serifLuxury text-2xl sm:text-3xl font-bold text-white leading-snug">
                {item.title}
              </h3>

              <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-transparent"></div>

              <div className="space-y-2">
                <div className="text-[11px] uppercase tracking-widest text-amber-300/80 font-bold font-mono">
                  📜 CÂU CHUYỆN ẨN ĐẰNG SAU BỨC TRANH:
                </div>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed select-text">
                  "{item.story}"
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="pt-5 border-t border-zinc-800 flex items-center justify-between gap-3">
              <button
                onClick={() => onNavigate(-1)}
                className="px-4 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Tác phẩm trước</span>
              </button>
              <span className="text-xs text-zinc-500 font-mono">
                {currentIndex + 1} / {totalCount}
              </span>
              <button
                onClick={() => onNavigate(1)}
                className="px-4 py-2.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-200 text-xs font-semibold transition flex items-center gap-1.5"
              >
                <span>Tiếp theo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

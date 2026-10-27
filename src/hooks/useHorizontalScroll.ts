import { useEffect, RefObject } from 'react';

export function useHorizontalScroll(
  containerRef: RefObject<HTMLDivElement>,
  isGridView: boolean
) {
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // In grid view, keep standard vertical scrolling
      if (isGridView) return;

      // Translate vertical mouse wheel motion to horizontal scroll
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollBy({
          left: e.deltaY * 2.2,
          behavior: 'smooth',
        });
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      el.removeEventListener('wheel', handleWheel);
    };
  }, [containerRef, isGridView]);
}

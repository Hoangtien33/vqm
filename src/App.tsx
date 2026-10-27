import React, { useState, useRef } from 'react';
import { EXHIBITS_DATA } from './data/exhibitsData';
import { Exhibit } from './types/museum';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MuseumHallway } from './components/MuseumHallway';
import { SecretBirthdayRoom } from './components/SecretBirthdayRoom';
import { ArtworkModal } from './components/ArtworkModal';
import { MusicPlayer } from './components/MusicPlayer';
import { AmbientDustCanvas } from './components/AmbientDustCanvas';
import { FireworksCanvas, FireworksHandle } from './components/FireworksCanvas';
import { LobbyGate } from './components/LobbyGate';

export const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [isGridView, setIsGridView] = useState<boolean>(false);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const [customImages, setCustomImages] = useState<Record<number, string>>({});
  const [autoPlayMusic, setAutoPlayMusic] = useState<boolean>(false);

  const fireworksRef = useRef<FireworksHandle>(null);

  const handleEnterMuseum = () => {
    setHasEntered(true);
    setAutoPlayMusic(true);
  };

  const handleCelebration = () => {
    fireworksRef.current?.trigger();
    setAutoPlayMusic(true);
  };

  const handleWalk = (deltaX: number) => {
    const el = document.getElementById('museumHallwayContainer');
    if (el) {
      el.scrollBy({ left: deltaX, behavior: 'smooth' });
    }
  };

  const handleScrollToExhibit = (id: number) => {
    const el = document.getElementById(`exhibit-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  const handleJumpToHall = (hallId: string) => {
    const el = document.getElementById(hallId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
  };

  const handleScrollToFinal = () => {
    const el = document.getElementById('future-room');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSingleUpload = (exhibitId: number, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setCustomImages((prev) => ({
          ...prev,
          [exhibitId]: e.target!.result as string,
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleBulkUpload = (files: FileList) => {
    Array.from(files).slice(0, 10).forEach((file, idx) => {
      const matched = EXHIBITS_DATA.find((item) =>
        file.name.toLowerCase().includes(item.imagePath.split('/').pop()?.split('.')[0] || '')
      );
      const targetId = matched ? matched.id : idx + 1;

      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setCustomImages((prev) => ({
            ...prev,
            [targetId]: e.target!.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const currentModalItem = activeModalIndex !== null ? EXHIBITS_DATA[activeModalIndex] : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#08080a] text-zinc-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 relative">
      
      {/* Background Ambience & Canvas Overlays */}
      <AmbientDustCanvas />
      <FireworksCanvas ref={fireworksRef} />

      {/* Passcode Entrance Lobby Gate */}
      {!hasEntered && (
        <LobbyGate
          onEnter={handleEnterMuseum}
          onBulkUpload={handleBulkUpload}
        />
      )}

      {/* Top Navbar */}
      <Navbar
        onJumpToHall={handleJumpToHall}
        onScrollToFinal={handleScrollToFinal}
        isGridView={isGridView}
        onToggleLayout={() => setIsGridView(!isGridView)}
      />

      {/* Hero Welcome Banner & Controls */}
      <HeroSection
        exhibits={EXHIBITS_DATA}
        onWalk={handleWalk}
        onScrollToExhibit={handleScrollToExhibit}
        onBulkUpload={handleBulkUpload}
      />

      {/* Main Horizontal Museum Hallway */}
      <MuseumHallway
        exhibits={EXHIBITS_DATA}
        customImages={customImages}
        isGridView={isGridView}
        onOpenModal={(index) => setActiveModalIndex(index)}
        onSingleUpload={handleSingleUpload}
        onScrollToFinal={handleScrollToFinal}
      />

      {/* The Secret Future Room & Birthday Cake */}
      <SecretBirthdayRoom onCelebrationTrigger={handleCelebration} />

      {/* Modal Plaque & Lightbox */}
      {currentModalItem && (
        <ArtworkModal
          item={currentModalItem}
          currentIndex={activeModalIndex!}
          totalCount={EXHIBITS_DATA.length}
          customSrc={customImages[currentModalItem.id]}
          onClose={() => setActiveModalIndex(null)}
          onNavigate={(dir) => {
            const nextIdx = (activeModalIndex! + dir + EXHIBITS_DATA.length) % EXHIBITS_DATA.length;
            setActiveModalIndex(nextIdx);
          }}
          onReplaceImage={(file) => handleSingleUpload(currentModalItem.id, file)}
        />
      )}

      {/* Floating YouTube Music Player (Khúc Hát Mừng Sinh Nhật Remix • CGfM-PN3qcs) */}
      <MusicPlayer
        videoId="CGfM-PN3qcs"
        autoPlayTrigger={autoPlayMusic}
      />

    </div>
  );
};
export default App;

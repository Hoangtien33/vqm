import React, { useState, useRef, useEffect } from 'react';
import { EXHIBITS_DATA } from './data/exhibitsData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MuseumHallway } from './components/MuseumHallway';
import { SecretBirthdayRoom } from './components/SecretBirthdayRoom';
import { ArtworkModal } from './components/ArtworkModal';
import { MusicPlayer, MusicPlayerHandle } from './components/MusicPlayer';
import { AmbientDustCanvas } from './components/AmbientDustCanvas';
import { FireworksCanvas, FireworksHandle } from './components/FireworksCanvas';
import { LobbyGate } from './components/LobbyGate';

export const App: React.FC = () => {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [isGridView, setIsGridView] = useState<boolean>(false);
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const fireworksRef = useRef<FireworksHandle>(null);
  const musicPlayerRef = useRef<MusicPlayerHandle>(null);

  const handleEnterMuseum = () => {
    setHasEntered(true);
    // When entering the museum hallway, keep playing the "Thank You" beat at gentle 38% volume
    // so the visitor can comfortably read the artwork stories without loud distractions
    musicPlayerRef.current?.playTrack('lobby', 38);
  };

  const handlePlayLobbyMusic = () => {
    musicPlayerRef.current?.playTrack('lobby', 45);
  };

  // Dynamic automatic music transition based on scroll section:
  // - In exhibition hallway / sảnh: "Thank You" at gentle reading volume (38%)
  // - In birthday cake room / phòng bánh kem: "Khúc Hát Mừng Sinh Nhật [Remix]" at party volume (80%)
  useEffect(() => {
    if (!hasEntered) return;

    const futureRoomEl = document.getElementById('future-room');
    if (!futureRoomEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Visitor is in the Birthday Cake Room -> Switch to Birthday Remix!
            musicPlayerRef.current?.playTrack('party', 80);
          } else {
            // Visitor is back in the Exhibition Hallway -> Switch to gentle Thank You beat!
            musicPlayerRef.current?.playTrack('lobby', 38);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(futureRoomEl);
    return () => observer.disconnect();
  }, [hasEntered]);

  const handleCelebration = () => {
    fireworksRef.current?.trigger();
    // Energetic birthday remix celebration
    musicPlayerRef.current?.playTrack('party', 85);
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
      // In hallway, ensure gentle reading volume
      musicPlayerRef.current?.playTrack('lobby', 38);
    }
  };

  const handleScrollToFinal = () => {
    const el = document.getElementById('future-room');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Switch directly to Birthday Remix at the cake room
      musicPlayerRef.current?.playTrack('party', 80);
    }
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
          onPlayLobbyMusic={handlePlayLobbyMusic}
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
      />

      {/* Main Horizontal Museum Hallway */}
      <MuseumHallway
        exhibits={EXHIBITS_DATA}
        isGridView={isGridView}
        onOpenModal={(index) => setActiveModalIndex(index)}
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
          onClose={() => setActiveModalIndex(null)}
          onNavigate={(dir) => {
            const nextIdx = (activeModalIndex! + dir + EXHIBITS_DATA.length) % EXHIBITS_DATA.length;
            setActiveModalIndex(nextIdx);
          }}
        />
      )}

      {/* Dual-Track Floating YouTube Music Player (Lobby Beat: 08PaKd2Xmxw & Birthday Remix: CGfM-PN3qcs) */}
      <MusicPlayer
        ref={musicPlayerRef}
        initialTrack="lobby"
      />

    </div>
  );
};
export default App;

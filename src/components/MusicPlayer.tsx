import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, ChevronUp, ChevronDown, Disc } from 'lucide-react';

export interface MusicPlayerHandle {
  playTrack: (trackKey: 'lobby' | 'party', customVolume?: number) => void;
  play: () => void;
  pause: () => void;
  setVolume: (vol: number) => void;
  getCurrentTrack: () => 'lobby' | 'party';
}

export const TRACKS = {
  lobby: {
    id: '08PaKd2Xmxw',
    title: 'Happy Upbeat Beat ("Thank You")',
    artist: 'omitobeats • Nhạc Sảnh Triển Lãm (Vừa đọc vừa nghe)',
    badge: 'SẢNH TRIỂN LÃM',
    defaultVol: 38 // Gentle volume for reading stories comfortably
  },
  party: {
    id: 'CGfM-PN3qcs',
    title: 'Khúc Hát Mừng Sinh Nhật [Remix]',
    artist: 'DJ Khoa Music • Phòng Bánh Kem & Thổi Nến',
    badge: 'BÁNH SINH NHẬT',
    defaultVol: 80 // Energetic volume for birthday party celebration
  }
};

interface MusicPlayerProps {
  initialTrack?: 'lobby' | 'party';
  autoPlayTrigger?: boolean;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const MusicPlayer = forwardRef<MusicPlayerHandle, MusicPlayerProps>(({
  initialTrack = 'lobby',
  autoPlayTrigger = false,
}, ref) => {
  const [currentTrackKey, setCurrentTrackKey] = useState<'lobby' | 'party'>(initialTrack);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(TRACKS[initialTrack].defaultVol);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const playerRef = useRef<any>(null);

  const currentTrack = TRACKS[currentTrackKey];

  // Expose imperative methods to parent
  useImperativeHandle(ref, () => ({
    playTrack: (trackKey: 'lobby' | 'party', customVolume?: number) => {
      switchTrack(trackKey, true, customVolume);
    },
    play: () => {
      if (playerRef.current && isReady) {
        playerRef.current.playVideo();
        setIsPlaying(true);
      }
    },
    pause: () => {
      if (playerRef.current && isReady) {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
      }
    },
    setVolume: (vol: number) => {
      setVolumeState(vol);
      if (playerRef.current && isReady) {
        playerRef.current.setVolume(vol);
      }
    },
    getCurrentTrack: () => currentTrackKey,
  }));

  const switchTrack = (trackKey: 'lobby' | 'party', startPlaying = true, customVol?: number) => {
    const targetVol = customVol !== undefined ? customVol : TRACKS[trackKey].defaultVol;
    setCurrentTrackKey(trackKey);
    setVolumeState(targetVol);

    const newTrack = TRACKS[trackKey];
    if (playerRef.current && isReady) {
      try {
        playerRef.current.setVolume(targetVol);
        playerRef.current.loadVideoById(newTrack.id);
        if (startPlaying) {
          playerRef.current.playVideo();
          setIsPlaying(true);
        }
      } catch (e) {
        console.warn('Switch track error', e);
      }
    }
  };

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      initPlayer();
    }

    function initPlayer() {
      if (playerRef.current) return;
      try {
        playerRef.current = new window.YT.Player('youtube-audio-stream', {
          height: '10',
          width: '10',
          videoId: TRACKS[currentTrackKey].id,
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            playlist: TRACKS[currentTrackKey].id,
            modestbranding: 1,
            rel: 0,
            playsinline: 1,
          },
          events: {
            onReady: (event: any) => {
              setIsReady(true);
              event.target.setVolume(volume);
              try {
                event.target.playVideo();
                setIsPlaying(true);
              } catch (e) {}
            },
            onStateChange: (event: any) => {
              if (event.data === 1) setIsPlaying(true);
              else if (event.data === 2 || event.data === 0) setIsPlaying(false);
            },
          },
        });
      } catch (err) {
        console.warn('YouTube API loading error', err);
      }
    }
  }, []);

  useEffect(() => {
    if (autoPlayTrigger && playerRef.current && isReady) {
      try {
        playerRef.current.playVideo();
        setIsPlaying(true);
      } catch (e) {}
    }
  }, [autoPlayTrigger, isReady]);

  const togglePlay = () => {
    if (!playerRef.current || !isReady) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.playVideo();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!playerRef.current || !isReady) return;
    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseInt(e.target.value, 10);
    setVolumeState(newVol);
    if (playerRef.current && isReady) {
      playerRef.current.setVolume(newVol);
      if (newVol > 0 && isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      }
    }
  };

  return (
    <>
      <div className="fixed -bottom-40 -right-40 opacity-0 pointer-events-none w-1 h-1 overflow-hidden">
        <div id="youtube-audio-stream"></div>
      </div>

      <div className="fixed bottom-5 right-5 z-40 select-none">
        <div className="bg-[#121117]/95 backdrop-blur-md border border-amber-500/40 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.85)] p-3 transition-all duration-300 max-w-[340px]">
          
          <div className="flex items-center gap-3">
            <div 
              onClick={togglePlay}
              className={`w-11 h-11 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-700 p-0.5 shadow-lg cursor-pointer shrink-0 transition ${
                isPlaying ? 'animate-[spin_4s_linear_infinite]' : 'opacity-85'
              }`}
            >
              <div className="w-full h-full bg-[#181820] rounded-full flex items-center justify-center border border-amber-400/40">
                <Music className="w-5 h-5 text-amber-300" />
              </div>
            </div>

            <div className="flex-1 min-w-0 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold px-1.5 py-0.2 bg-amber-500/10 rounded border border-amber-500/20">
                  {currentTrack.badge}
                </span>
                {isPlaying && (
                  <span className="flex items-center gap-0.5 ml-1">
                    <span className="w-1 h-3 bg-amber-400 animate-pulse rounded-full"></span>
                    <span className="w-1 h-4 bg-yellow-300 animate-bounce rounded-full"></span>
                    <span className="w-1 h-2 bg-amber-500 animate-pulse rounded-full"></span>
                  </span>
                )}
              </div>
              <h4 className="text-xs font-bold text-white truncate mt-0.5">
                {currentTrack.title}
              </h4>
              <p className="text-[10px] text-zinc-400 truncate">
                {currentTrack.artist}
              </p>
            </div>

            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-xl bg-amber-500 hover:bg-yellow-400 text-zinc-950 flex items-center justify-center font-bold shadow-md transition active:scale-90 shrink-0"
              title={isPlaying ? "Tạm dừng" : "Phát nhạc"}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-zinc-400 hover:text-amber-300 transition p-1"
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>

          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-zinc-800 space-y-3 animate-fadeIn">
              {/* Track Selector Buttons */}
              <div className="space-y-1.5">
                <div className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold font-mono">
                  CHỌN BÀI HÁT:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => switchTrack('lobby', true, 38)}
                    className={`px-2.5 py-1.5 rounded-lg text-left text-[11px] font-semibold border transition flex items-center gap-1.5 ${
                      currentTrackKey === 'lobby'
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Disc className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">Nhạc Sảnh (Êm dịu)</span>
                  </button>
                  <button
                    onClick={() => switchTrack('party', true, 80)}
                    className={`px-2.5 py-1.5 rounded-lg text-left text-[11px] font-semibold border transition flex items-center gap-1.5 ${
                      currentTrackKey === 'party'
                        ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Disc className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">Sinh Nhật Remix</span>
                  </button>
                </div>
              </div>

              {/* Volume Slider */}
              <div className="flex items-center gap-2 pt-1 border-t border-zinc-800/80">
                <button 
                  onClick={toggleMute} 
                  className="text-zinc-400 hover:text-amber-300 transition"
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-amber-300" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <span className="text-[10px] font-mono text-zinc-400 w-7 text-right">
                  {isMuted ? '0%' : `${volume}%`}
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
});

MusicPlayer.displayName = 'MusicPlayer';

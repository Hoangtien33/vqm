import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';

interface MusicPlayerProps {
  videoId?: string;
  autoPlayTrigger?: boolean;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({
  videoId = 'CGfM-PN3qcs',
  autoPlayTrigger = false,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(75);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const playerRef = useRef<any>(null);

  // Load YouTube Iframe API Script
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
          videoId: videoId,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            playlist: videoId,
            modestbranding: 1,
            rel: 0,
            playsinline: 1,
          },
          events: {
            onReady: (event: any) => {
              setIsReady(true);
              event.target.setVolume(volume);
            },
            onStateChange: (event: any) => {
              // 1 = playing, 2 = paused
              if (event.data === 1) setIsPlaying(true);
              else if (event.data === 2 || event.data === 0) setIsPlaying(false);
            },
          },
        });
      } catch (err) {
        console.warn('YouTube API loading fallback', err);
      }
    }

    return () => {
      // Cleanup player if needed
    };
  }, [videoId]);

  // Handle external autoplay trigger (e.g. from cake blowing or entering lobby)
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
    setVolume(newVol);
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
      {/* Hidden YouTube Iframe Player Container */}
      <div className="fixed -bottom-40 -right-40 opacity-0 pointer-events-none w-1 h-1 overflow-hidden">
        <div id="youtube-audio-stream"></div>
      </div>

      {/* Floating Luxury Museum Audio Controller */}
      <div className="fixed bottom-5 right-5 z-40 select-none">
        <div className="bg-[#121117]/95 backdrop-blur-md border border-amber-500/40 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.85)] p-3 transition-all duration-300 max-w-[320px]">
          
          {/* Main Bar */}
          <div className="flex items-center gap-3">
            {/* Spinning Vinyl Avatar */}
            <div 
              onClick={togglePlay}
              className={`w-11 h-11 rounded-full bg-gradient-to-tr from-amber-600 via-yellow-400 to-amber-700 p-0.5 shadow-lg cursor-pointer shrink-0 transition ${
                isPlaying ? 'animate-[spin_4s_linear_infinite]' : 'opacity-80'
              }`}
            >
              <div className="w-full h-full bg-[#181820] rounded-full flex items-center justify-center border border-amber-400/40">
                <Music className="w-5 h-5 text-amber-300" />
              </div>
            </div>

            {/* Song Info */}
            <div className="flex-1 min-w-0 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold">
                  NHẠC SINH NHẬT
                </span>
                {isPlaying && (
                  <span className="flex items-center gap-0.5">
                    <span className="w-1 h-3 bg-amber-400 animate-pulse rounded-full"></span>
                    <span className="w-1 h-4 bg-yellow-300 animate-bounce rounded-full"></span>
                    <span className="w-1 h-2 bg-amber-500 animate-pulse rounded-full"></span>
                  </span>
                )}
              </div>
              <h4 className="text-xs font-bold text-white truncate">
                Khúc Hát Mừng Sinh Nhật [Remix]
              </h4>
              <p className="text-[10px] text-zinc-400 truncate">
                DJ Khoa Music • Tặng Quốc Mạnh
              </p>
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-9 h-9 rounded-xl bg-amber-500 hover:bg-yellow-400 text-zinc-950 flex items-center justify-center font-bold shadow-md transition active:scale-90 shrink-0"
              title={isPlaying ? "Tạm dừng nhạc" : "Bật nhạc sinh nhật"}
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </button>

            {/* Toggle Expand Arrow */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-zinc-400 hover:text-amber-300 transition p-1"
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </button>
          </div>

          {/* Expanded Drawer: Volume & Source Link */}
          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-zinc-800 space-y-2.5 animate-fadeIn">
              <div className="flex items-center gap-2">
                <button 
                  onClick={toggleMute} 
                  className="text-zinc-400 hover:text-amber-300 transition"
                  title={isMuted ? "Bật tiếng" : "Tắt tiếng"}
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

              <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
                <span className="text-amber-300/80">Âm thanh bảo tàng</span>
                <a
                  href={`https://youtu.be/${videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-zinc-400 hover:text-amber-300 transition"
                >
                  <span>Mở YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

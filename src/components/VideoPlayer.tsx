"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoPlayer({ videoId }: { videoId: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [player, setPlayer] = useState<any>(null);

  useEffect(() => {
    // Initialize player when API is ready
    const initPlayer = () => {
      if (iframeRef.current && (window as any).YT) {
        const newPlayer = new (window as any).YT.Player(iframeRef.current, {
          events: {
            onReady: (event: any) => {
              setPlayer(event.target);
              // It's already muted by URL parameter, but ensure state matches
              event.target.mute();
            },
          },
        });
      }
    };

    // Load YouTube API script if not already loaded
    if (!(window as any).YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        document.head.appendChild(tag);
      }
      (window as any).onYouTubeIframeAPIReady = initPlayer;
    } else if ((window as any).YT && (window as any).YT.Player) {
      initPlayer();
    }
  }, []);

  const toggleMute = () => {
    if (player && typeof player.unMute === 'function') {
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="w-full h-full min-h-[350px] relative rounded-[24px] overflow-hidden shadow-sm bg-gray-100 group">
      {/* Video wrapper with pointer-events-none to hide UI interactions */}
      <div className="absolute inset-0 w-full h-full pointer-events-none scale-[1.35]">
        <iframe
          ref={iframeRef}
          id="youtube-player"
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&loop=1&mute=1&playlist=${videoId}&controls=0&rel=0&modestbranding=1&playsinline=1&vq=hd720`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Volume Toggle Button */}
      <button 
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-10 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md transition-all"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
        )}
      </button>
    </div>
  );
}

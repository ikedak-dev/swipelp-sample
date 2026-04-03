"use client";
import React, { useRef, useEffect } from "react";

export const LeftLayout = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="hidden lg:block flex-1 relative overflow-hidden">
      <video
        ref={videoRef}
        src="/images/left.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

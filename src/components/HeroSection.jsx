import { useRef, useEffect, useState } from "react";
import video from "../assets/hero.mp4";
import logo from "../assets/logo.png";

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleTimeUpdate = () => {
      const videoElement = videoRef.current;
      if (videoElement) {
        const remainingTime = videoElement.duration - videoElement.currentTime;
        if (remainingTime <= 0.2) {
          videoElement.pause();
          setShowLogo(true);
        }
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      }
    };
  }, []);

  const handleUnmute = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = false;
      videoElement.currentTime = 0;
      videoElement.play();
      setIsMuted(false);
      setShowLogo(false); // Hide the logo when the video restarts
    }
  };

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          ref={videoRef}
          src={video}
          className="h-full w-full object-cover"
          autoPlay
          playsInline
          muted={isMuted}
          poster="hero"
        ></video>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
      <div className="relative z-20 flex h-full items-center justify-center">
        <img
          src={logo}
          alt="Panda"
          className={`p-4 ${
            showLogo ? "opacity-100 scale-100" : "opacity-0 scale-75"
          } transition-opacity duration-1000 ease-in-out`}
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "80%",
            maxHeight: "80%",
            filter: "invert(1)",
          }}
        />
        {isMuted && (
          <button
            onClick={handleUnmute}
            className="absolute right-0 bottom-10 bg-black p-2 rounded-3xl shadow-lg"
          >
            Unmute
          </button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;

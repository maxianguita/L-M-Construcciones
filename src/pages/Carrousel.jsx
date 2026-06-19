import { memo } from "react";
import videoConstruccion from "../videos/4729640-uhd_2560_1440_30fps.mp4";

const Carrousel = () => {
  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-[100vw] overflow-hidden mt-8">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[600px] object-cover"
      >
        <source src={videoConstruccion} type="video/mp4" />
      </video>

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default memo(Carrousel);
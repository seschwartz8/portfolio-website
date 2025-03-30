import { useState } from "react";
import { useIsSmOrBelow } from "../../../hooks/useIsSmOrBelow";
import { ImageZoomModal } from "./ImageZoomModal";

export const ProjImg = ({ src }: { src: string }) => {
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);
  const isMobile = useIsSmOrBelow();

  return (
    <>
      <div
        onClick={() => setZoomedImg(src)}
        style={{
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          height: "100%",
          backgroundSize: "contain",
          backgroundPosition: "center top",
          cursor: "pointer",
        }}
      />
      <ImageZoomModal
        imageUrl={zoomedImg}
        isOpen={!!zoomedImg && !isMobile}
        onClose={() => setZoomedImg(null)}
      />
    </>
  );
};

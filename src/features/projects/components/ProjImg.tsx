import { useState } from "react";
import { ImageZoomModal } from "./ImageZoomModal";

export const ProjImg = ({ src }: { src: string }) => {
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);

  return (
    <>
      <div
        onClick={() => setZoomedImg(src)}
        style={{
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          height: "100%",
          backgroundSize: "contain",
          backgroundPosition: "center",
          cursor: "pointer",
        }}
      />
      <ImageZoomModal
        isVideo={false}
        imageUrl={zoomedImg}
        isOpen={!!zoomedImg}
        onClose={() => setZoomedImg(null)}
      />
    </>
  );
};

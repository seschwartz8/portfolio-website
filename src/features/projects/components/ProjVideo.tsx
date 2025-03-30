export const ProjVideo = ({ src }: { src: string }) => {
  return (
    <video
      src={src}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        objectPosition: "center top",
      }}
      controls
      autoPlay
      playsInline
    >
      <source src={src} type="video/mp4" />
      <source src={src} type="video/quicktime" />
      Your browser does not support the video tag.
    </video>
  );
};

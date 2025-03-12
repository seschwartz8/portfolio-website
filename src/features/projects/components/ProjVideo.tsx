export const ProjVideo = ({
  src,
  onClick,
}: {
  src: string;
  onClick: () => void;
}) => {
  return (
    <video
      src={src}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
      }}
      onClick={onClick}
      controls
      autoPlay
    >
      <source src={src} type="video/mp4" />
      <source src={src} type="video/quicktime" />
      Your browser does not support the video tag.
    </video>
  );
};

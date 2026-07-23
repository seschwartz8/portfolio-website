import { Fade, Modal } from "@mui/material";

interface ImageZoomModalProps {
  imageUrl: string | null;
  alt?: string;
  onClose: () => void;
}

/**
 * Full-screen preview of a project screenshot. The tile crops to fill; this
 * shows the whole frame. Click anywhere (or the backdrop) to dismiss.
 */
export function ImageZoomModal({ imageUrl, alt, onClose }: ImageZoomModalProps) {
  return (
    <Modal
      open={!!imageUrl}
      onClose={onClose}
      closeAfterTransition
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: { xs: 3, md: 6 },
      }}
      slotProps={{ backdrop: { sx: { backgroundColor: "rgba(43,40,36,0.82)" } } }}
    >
      <Fade in={!!imageUrl} timeout={300}>
        <img
          src={imageUrl ?? ""}
          alt={alt}
          onClick={onClose}
          style={{
            maxWidth: "92vw",
            maxHeight: "88vh",
            objectFit: "contain",
            borderRadius: 12,
            outline: "none",
            cursor: "zoom-out",
          }}
        />
      </Fade>
    </Modal>
  );
}

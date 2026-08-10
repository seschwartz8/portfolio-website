import { Box, Fade, Modal } from "@mui/material";

interface ImageZoomModalProps {
  imageUrl: string | null;
  alt?: string;
  onClose: () => void;
}

/**
 * Full-screen preview of a project screenshot — the tile crops to fill, this
 * shows the whole frame. A click anywhere (or Escape) dismisses it.
 *
 * The overlay stops click propagation because MUI's Modal renders in a portal
 * and React replays those clicks up the component tree — without this they'd
 * reach the tile's open handler and immediately re-open the preview.
 */
export function ImageZoomModal({ imageUrl, alt, onClose }: ImageZoomModalProps) {
  const dismiss = (event: React.MouseEvent) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <Modal
      open={!!imageUrl}
      onClose={onClose}
      closeAfterTransition
      slotProps={{ backdrop: { sx: { backgroundColor: "rgba(43,40,36,0.82)" } } }}
    >
      <Fade in={!!imageUrl} timeout={300}>
        <Box
          onClick={dismiss}
          sx={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: { xs: 3, md: 6 },
            outline: "none",
            cursor: "zoom-out",
          }}
        >
          <Box
            component="img"
            src={imageUrl ?? ""}
            alt={alt}
            sx={{
              maxWidth: "92vw",
              maxHeight: "88vh",
              objectFit: "contain",
              borderRadius: "12px",
              display: "block",
              boxShadow: "0 40px 80px -40px rgba(0,0,0,0.7)",
            }}
          />
        </Box>
      </Fade>
    </Modal>
  );
}

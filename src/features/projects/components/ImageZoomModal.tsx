import CloseIcon from "@mui/icons-material/Close";
import { Box, Fade, IconButton, Modal } from "@mui/material";

interface ImageZoomModalProps {
  imageUrl: string | null;
  alt?: string;
  onClose: () => void;
}

/**
 * Full-screen preview of a project screenshot. The tile crops to fill; this
 * shows the whole frame. Dismiss via the close button, the backdrop, the image,
 * or Escape.
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
        <Box sx={{ position: "relative", outline: "none" }}>
          <IconButton
            onClick={onClose}
            aria-label="Close preview"
            sx={{
              position: "absolute",
              top: -8,
              right: -8,
              zIndex: 1,
              color: "#2B2824",
              backgroundColor: "#EDEAE1",
              boxShadow: "0 6px 20px -8px rgba(0,0,0,0.6)",
              "&:hover": { backgroundColor: "#EDEAE1", transform: "scale(1.06)" },
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
          <img
            src={imageUrl ?? ""}
            alt={alt}
            onClick={onClose}
            style={{
              maxWidth: "92vw",
              maxHeight: "88vh",
              objectFit: "contain",
              borderRadius: 12,
              display: "block",
              cursor: "zoom-out",
            }}
          />
        </Box>
      </Fade>
    </Modal>
  );
}

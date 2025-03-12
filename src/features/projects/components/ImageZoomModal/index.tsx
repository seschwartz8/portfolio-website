import { Box, Modal } from "@mui/material";

interface ImageZoomModalProps {
  imageUrl: string | null;
  isOpen: boolean;
  onClose: () => void;
  isVideo?: boolean;
}

export function ImageZoomModal({
  imageUrl,
  isOpen,
  onClose,
  isVideo = false,
}: ImageZoomModalProps) {
  if (!imageUrl) return null;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          outline: "none",
        }}
      >
        {isVideo ? (
          <video
            src={imageUrl}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            onClick={onClose}
            controls
            autoPlay
          />
        ) : (
          <img
            src={imageUrl}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            onClick={onClose}
          />
        )}
      </Box>
    </Modal>
  );
}

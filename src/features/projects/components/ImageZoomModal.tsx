import { Box, Modal } from "@mui/material";

interface ImageZoomModalProps {
  imageUrl: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageZoomModal({
  imageUrl,
  isOpen,
  onClose,
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
        <img
          src={imageUrl}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          onClick={onClose}
        />
      </Box>
    </Modal>
  );
}

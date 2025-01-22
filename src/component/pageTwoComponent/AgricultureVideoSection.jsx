import { Box } from "@mui/material";

const AgricultureVideoSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        backgroundColor: "#000",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <video
  src="/videos/planting.mp4"
  style={{ width: "100%", height: "100%", objectFit: "cover" }}
  autoPlay
  muted
  loop
  preload="auto"
  onError={(e) => {
    console.error("Video Error:", e);
  }}
>
  Your browser does not support the video tag.
</video>
    </Box>
  );
};

export default AgricultureVideoSection;

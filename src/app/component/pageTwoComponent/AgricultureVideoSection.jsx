import { Box, Container, IconButton, Typography } from "@mui/material";
// import plantingVideo from '../../assets/images/planting.mp4'

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
          id="agriculture-video"
          muted
          loop
          autoPlay
        >
          <source src='../../assets/images/planting.mp4' type="video/mp4"/>
        </video>
    </Box>
  );
};

export default AgricultureVideoSection;

import { Box, CircularProgress } from "@mui/material";

const LoadingScreen = () => {
  return <Box className="flex justify-center items-center h-screen">
    <CircularProgress size={50} />
  </Box>;
};

export default LoadingScreen;

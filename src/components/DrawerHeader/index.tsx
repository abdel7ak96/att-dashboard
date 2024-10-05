import { Box, IconButton, Typography } from '@mui/material';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { BarChart } from '@/assets/icons';

const DrawerHeader = () => {
  return (
    <>
      <Box>
        <IconButton>
          <BarChart />
        </IconButton>
      </Box>
      <Box className="flex items-center justify-between w-40 my-5">
        <Typography
          className="bg-white p-2 rounded-md text-primary font-bold"
          component="span"
        >
          VO
        </Typography>
        <Typography component="h1">Volvo cars</Typography>
        <KeyboardArrowDownSharpIcon className="text-primary" />
      </Box>
    </>
  );
};

export default DrawerHeader;

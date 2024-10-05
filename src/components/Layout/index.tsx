import { ReactElement, useState } from 'react';
import { Box } from '@mui/material';

const Layout = ({
  appBar,
  drawer,
}: {
  appBar: ReactElement;
  drawer: ReactElement;
}) => {
  const [drawerOpen] = useState<boolean>(true);
  return (
    <Box className="flex">
      {/* Drawer */}
      <Box
        className={`bg-accentLightPurple h-screen p-5 border-r-2 ${
          drawerOpen ? 'w-72' : 'w-14'
        }`}
      >
        {drawer}
      </Box>

      {/* AppBar */}
      <Box className="bg-red-400 h-8 w-full">{appBar}</Box>
    </Box>
  );
};

export default Layout;

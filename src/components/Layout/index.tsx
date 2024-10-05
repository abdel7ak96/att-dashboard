import { ReactElement, useState } from 'react';
import { Box } from '@mui/material';

const Layout = ({
  appBar,
  drawer,
  children,
}: {
  appBar: ReactElement;
  drawer: ReactElement;
  children?: ReactElement;
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
      <Box className="w-full">
        <Box className="w-full">{appBar}</Box>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

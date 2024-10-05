import { Bell, Crescent, Globe } from '@/assets/icons';
import DrawerHeader from '@/components/DrawerHeader';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import { KeyboardArrowDownSharp } from '@mui/icons-material';
import { Box, IconButton, List, ListItem, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Layout
      drawer={
        <>
          <DrawerHeader />
          <Navbar />
        </>
      }
      appBar={
        <>
          <List className="flex justify-end">
            <ListItem className="w-auto">
              <IconButton className="gap-x-2">
                <Globe />
                <Typography color="primary">En</Typography>
              </IconButton>
            </ListItem>

            <ListItem className="w-auto">
              <IconButton className="gap-x-2">
                <Crescent />
              </IconButton>
            </ListItem>

            <ListItem className="w-auto">
              <IconButton className="gap-x-2">
                <Bell />
              </IconButton>
            </ListItem>

            <ListItem className="w-auto">
              <Box className="flex items-center gap-x-5">
                <img
                  className="rounded-full overflow-hidden w-10 h-10"
                  src="src/assets/images/avatar.png"
                  alt="Avatar"
                />
                <Box>
                  <Typography>Jenny Wilson</Typography>
                  <Typography color='textDisabled'>Admin</Typography>
                </Box>
                <KeyboardArrowDownSharp color="primary" />
              </Box>
            </ListItem>
          </List>
        </>
      }
    >
      <Outlet />
    </Layout>
  );
};

export default Dashboard;

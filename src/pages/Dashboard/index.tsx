import DrawerHeader from '@/components/DrawerHeader';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
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
      appBar={<>AppBar v2</>}
    >
      <Outlet />
    </Layout>
  );
};

export default Dashboard;

import DrawerHeader from '@/components/DrawerHeader';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';

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
    />
  );
};

export default Dashboard;

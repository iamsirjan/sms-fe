import { useRoutes } from 'react-router-dom';
import { NAVIGATION_ROUTES } from './routes.constant';
import Layout from '@codeHimalaya/components/layouts/Layout';
import Login from '@codeHimalaya/pages/Login/Login';
import { useAuthentication } from '@codeHimalaya/service/service-auth';
import { Center, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import Purchase from '@codeHimalaya/pages/Purchase';
import Dashboard from '@codeHimalaya/pages/Dashboard';
import AddPurchase from '@codeHimalaya/pages/Purchase/AddPurchase';
import Material from '@codeHimalaya/pages/Material';
import AddMaterial from '@codeHimalaya/pages/Material/AddMaterial';

const adminRoutes = [
  {
    path: NAVIGATION_ROUTES.BASE,
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: NAVIGATION_ROUTES.MATERIAL,
    element: (
      <Layout>
        <Material />
      </Layout>
    ),
  },
  {
    path: NAVIGATION_ROUTES.ADDMATERIAL,
    element: (
      <Layout>
        <AddMaterial />
      </Layout>
    ),
  },
  {
    path: NAVIGATION_ROUTES.PURCHASE,
    element: (
      <Layout>
        <Purchase />
      </Layout>
    ),
  },
  {
    path: NAVIGATION_ROUTES.ADDPURCHASE,
    element: (
      <Layout>
        <AddPurchase />
      </Layout>
    ),
  },
];

const openRoutes = [
  {
    path: NAVIGATION_ROUTES.BASE,
    element: <Login />,
  },
];

const AppRoutes = () => {
  const { data: isAuthenticated, isLoading } = useAuthentication();

  const element = useRoutes(isAuthenticated ? adminRoutes : openRoutes);

  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );
  }

  return <Suspense fallback={<Spinner />}>{element}</Suspense>;
};

export default AppRoutes;

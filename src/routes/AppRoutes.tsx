import { useRoutes } from 'react-router-dom';
import { NAVIGATION_ROUTES } from './routes.constant';
import Dashboard from '@codeHimalaya/pages/Dashboard/index';
import Layout from '@codeHimalaya/components/layouts/Layout';
import Login from '@codeHimalaya/pages/Login/Login';
import User from '@codeHimalaya/pages/User';
import { Circle } from '@chakra-ui/react';
import { Suspense } from 'react';
import { useAuthProvider } from '@codehimalaya/authentication_service';
import Admin from '@codeHimalaya/pages/Admin';
const openRoutes = [
  {
    path: NAVIGATION_ROUTES.BASE,
    element: <Login />,
  },
  {
    path: NAVIGATION_ROUTES.NO_MATCH,
    element: <Login />,
  },
];

const routes = [
  {
    path: NAVIGATION_ROUTES.BASE,
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },

  {
    path: NAVIGATION_ROUTES.DASHBOARD,
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },

  {
    path: NAVIGATION_ROUTES.ADMIN,
    element: (
      <Layout>
        <Admin />
      </Layout>
    ),
  },
  {
    path: NAVIGATION_ROUTES.HOME,
    element: (
      <Layout>
        <User />
      </Layout>
    ),
  },
];
// const protectedRoutes = [];

const AppRoutes = () => {
  const { isAuthenticated } = useAuthProvider();

  const element = useRoutes(isAuthenticated ? routes : openRoutes);

  return <Suspense fallback={<Circle />}>{element}</Suspense>;
};

export default AppRoutes;

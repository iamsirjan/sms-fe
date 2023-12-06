import { useRoutes } from 'react-router-dom';
import { NAVIGATION_ROUTES } from './routes.constant';
import Dashboard from '@asheshDon/pages/Dashboard/index';
import Layout from '@asheshDon/components/layouts/Layout';
import Login from '@asheshDon/pages/Login/Login';
// import Dashboard from "@asheshDon/pages/Dashboard";

const routes = [
  {
    path: NAVIGATION_ROUTES.DASHBOARD,
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: NAVIGATION_ROUTES.LOGIN,
    element: <Login />,
  },
];
const protectedRoutes = [];

const AppRoutes = () => {
  return useRoutes(routes);
};

export default AppRoutes;

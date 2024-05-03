import { DashboardIcon } from '@codeHimalaya/assets/svgs';
import { NAVIGATION_ROUTES } from '@codeHimalaya/routes/routes.constant';
import { checkViewAccess } from '@codeHimalaya/service/service-role';

const navItems = [
  {
    name: 'Dashboard',
    to: NAVIGATION_ROUTES.DASHBOARD,
    icon: DashboardIcon,
    // Sometime you will have to disable some view to the user
    // this visible boolean will be used in such scenario
    // TODO: needs discussion if this is actually good approach or
    visible: true,
  },
  {
    name: 'Admin',
    to: NAVIGATION_ROUTES.ADMIN,
    icon: DashboardIcon,
    // Sometime you will have to disable some view to the user
    // this visible boolean will be used in such scenario
    // TODO: needs discussion if this is actually good approach or
    visible: checkViewAccess('admin'),
  },
  {
    name: 'Home',
    to: NAVIGATION_ROUTES.HOME,
    icon: DashboardIcon,
    // Sometime you will have to disable some view to the user
    // this visible boolean will be used in such scenario
    // TODO: needs discussion if this is actually good approach or
    visible: checkViewAccess('home'),
  },
];

export { navItems };

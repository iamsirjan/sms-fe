import { DashboardIcon } from '@codeHimalaya/assets/svgs';
import { NAVIGATION_ROUTES } from '@codeHimalaya/routes/routes.constant';

const navItems = [
  {
    name: 'Dashboard',
    to: NAVIGATION_ROUTES.BASE,
    icon: DashboardIcon,
    visible: true,
  },
  {
    name: 'Material',
    to: NAVIGATION_ROUTES.MATERIAL,
    icon: DashboardIcon,
    visible: true,
  },
  {
    name: 'Purchase',
    to: NAVIGATION_ROUTES.PURCHASE,
    icon: DashboardIcon,
    visible: true,
  },
];

export { navItems };

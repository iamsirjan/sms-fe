import { Box, List, ListItem, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
// import { FiInfo } from "react-icons/fi";
import { NAVIGATION_ROUTES } from '@asheshDon/routes/routes.constant';
import { asheshDon_colors } from '@asheshDon/theme/color';
import NavItem from './NavItem';

import { DashboardIcon, LogoutIcon } from '@asheshDon/assets/svgs';

const Sidebar = ({
  isCollapse,
  isHovered,
  onEnterSidebar,
  onExitSidebar,
  width,
}: ISidebar) => {
  const navItems = [
    {
      name: 'Dashboard',
      to: NAVIGATION_ROUTES.DASHBOARD,
      icon: <DashboardIcon />,
      visible: true,
    },
    {
      name: 'Logout',
      to: NAVIGATION_ROUTES.LOGIN,
      icon: <LogoutIcon />,
      visible: true,
    },
  ];

  return (
    <Box
      w={width}
      maxW={width}
      color={asheshDon_colors.light_gray_text}
      sx={{
        '&::-webkit-scrollbar': {
          width: '3px',
          backgroundColor: asheshDon_colors.primary,
        },
      }}
      transitionDuration="0.3s"
      position={'relative'}
      maxH="100vh"
      overflowY={'auto'}
      onMouseEnter={onEnterSidebar}
      onMouseLeave={onExitSidebar}
      bgColor={asheshDon_colors.white}
    >
      <List>
        <ListItem mx={3} my={6}>
          <Link as={RouterLink} to={NAVIGATION_ROUTES.DASHBOARD}>
            {/* <img src={images.logo} alt="logo" /> */}
          </Link>
        </ListItem>
        {navItems.map((item) => (
          <NavItem
            key={item.name}
            {...item}
            isCollapse={isCollapse && !isHovered}
          />
        ))}
      </List>
    </Box>
  );
};

interface ISidebar {
  isCollapse: boolean;
  onEnterSidebar: () => void;
  onExitSidebar: () => void;
  isHovered: boolean;
  width: string;
}

export default Sidebar;

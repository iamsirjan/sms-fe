import { Box, Flex, Text } from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { getSidebarState } from './Layout';
import { useLogoutMutation } from '@codeHimalaya/service/service-auth';

const TopBar = () => {
  const { showSidebar, setShowSidebar } = getSidebarState();
  const logout = useLogoutMutation();
  const handleLogout = async () => {
    await logout.mutateAsync();
  };
  return (
    <Flex justifyContent={'space-between'}>
      <Box _hover={{ cursor: 'pointer' }}>
        <RxHamburgerMenu onClick={() => setShowSidebar(!showSidebar)} />
      </Box>

      <Text
        onClick={handleLogout}
        fontSize={'sm'}
        color={'gray.500'}
        cursor={'pointer'}
      >
        Logout
      </Text>
    </Flex>
  );
};

export default TopBar;

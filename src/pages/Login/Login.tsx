import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { useAuthProvider } from '@codehimalaya/authentication_service';

function Login() {
  return (
    <Flex direction="column" align="center" minHeight="100vh" padding="2rem">
      <NavBar />
      <Flex
        textAlign="center"
        direction={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        minH={'50vh'}
      >
        <Text fontSize="3xl" fontWeight="bold" marginBottom="1rem">
          Welcome to My Awesome App!
        </Text>
        <Text fontSize="xl">
          This is some random UI content on the landing page.
        </Text>
      </Flex>
      <Footer />
    </Flex>
  );
}

function NavBar() {
  const { login } = useAuthProvider();

  return (
    <Flex
      width="100%"
      justify="space-between"
      align="center"
      marginBottom="2rem"
    >
      <Text fontSize="2xl" fontWeight="bold">
        My App
      </Text>
      <Button
        variant={'outline'}
        colorScheme="blue"
        borderRadius={'6px'}
        onClick={login}
      >
        Login
      </Button>
    </Flex>
  );
}

function Footer() {
  return (
    <Box width="100%" textAlign="center" marginTop="auto">
      <Text fontSize="sm" color="gray.500">
        &copy; 2024 My Awesome App. All rights reserved.
      </Text>
    </Box>
  );
}

export default Login;

import { Input } from '@codeHimalaya/components/form';
import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '@codeHimalaya/service/service-auth';

export interface LoginDetails {
  username: string;
  password: string;
}

const defaultValues: LoginDetails = {
  username: '',
  password: '',
};

const schema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});

const Login = () => {
  const login = useLoginMutation();
  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmitHandler = async (loginDetails: LoginDetails) => {
    await login.mutateAsync({
      username: loginDetails.username,
      password: loginDetails.password,
    });
  };
  return (
    <Box
      display="flex"
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems="center"
      height={{ base: 'auto', md: '100vh' }}
    >
      <Flex>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Text fontSize={'3xl'} fontWeight={'semibold'}>
            {'Login'}
          </Text>
          <VStack pt={6} spacing={8}>
            <Input
              name={'username'}
              label={'Email'}
              control={control}
              w={'full'}
            />
            <Input
              name={'password'}
              label={'Password'}
              type={'password'}
              width={'full'}
              control={control}
            />
            <Button
              type="submit"
              width="full"
              // isLoading={isLoading}
            >
              {'Login'}
            </Button>
          </VStack>
        </form>
      </Flex>
    </Box>
  );
};

export default Login;

import { LoginIcon } from '@asheshDon/assets/svgs';
import FormControl from '@asheshDon/components/form/FormControl';
import { asheshDon_colors } from '@asheshDon/theme/color';
import {
  Box,
  Button,
  Flex,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
import { z } from 'zod';
// import { yupResolver } from '@hookform/resolvers/yup';
import { zodResolver } from '@hookform/resolvers/zod';
import { toastSuccess } from '@asheshDon/service/service-toast';

export interface LoginDetails {
  email: string;
  password: string;
}

const defaultValues: LoginDetails = {
  email: '',
  password: '',
};

// const schema = yup.object().shape({
//   email: yup.string().required('Email is required'),
//   password: yup.string().required('Password is required'),
// });

const schema = z.object({
  email: z.string().min(1, 'Email is required'),
  password: z.string().min(1, 'Password is required'),
});

const Login = () => {
  const { isOpen: isVisible, onToggle: onToggleVisibility } = useDisclosure();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmitHandler = async (loginDetails: LoginDetails) => {
    toastSuccess(
      `email :${loginDetails.email} and password: ${loginDetails.password}`,
    );
    // alert(loginDetails);
  };
  return (
    <Box
      height={'100vh'}
      display="flex"
      justifyContent={'center'}
      alignItems="center"
    >
      <Flex w={'100rem'} flexDirection={{ base: 'column-reverse', md: 'row' }}>
        <Flex
          flex={1}
          flexDirection={'column'}
          gap={4}
          ml={{ base: '2rem', lg: '3rem', xl: '6rem' }}
          mr={{ base: '2rem', lg: '3rem', xl: '20rem' }}
          py={'2rem'}
        >
          <Box>
            <Flex mt={6}>
              <Text
                fontSize={'20px'}
                color={asheshDon_colors.black}
                fontWeight={400}
              >
                {'Welcome to'}&nbsp;
              </Text>
              <Text
                fontSize={'20px'}
                color={asheshDon_colors.primary}
                mb={1}
                fontWeight={400}
              >
                CodeHimalaya boilerplate code
              </Text>
            </Flex>
            <Text fontSize={'32px'} fontWeight={600} mb={1}>
              {'Sign in'}
            </Text>

            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <VStack pt={6} spacing={8}>
                <FormControl
                  control="input"
                  size="lg"
                  type="email"
                  register={register}
                  placeholder={'Email'}
                  label="Enter Your Email"
                  name="email"
                  error={errors?.email?.message ?? ''}
                />
                <FormControl
                  control="password"
                  register={register}
                  size="lg"
                  isVisible={isVisible}
                  onToggleVisibility={onToggleVisibility}
                  name="password"
                  placeholder={'Password'}
                  label="Enter your Password"
                  error={errors?.password?.message ?? ''}
                />

                <Button
                  type="submit"
                  variant="primaryLarge"
                  size="lg_fit"
                  // isLoading={isLoading}
                >
                  {'Sign in'}
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>

        <Box flex={1}>
          <Flex direction={'column'} color={asheshDon_colors.white}>
            <LoginIcon style={{ width: '100%', height: 'auto' }} />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;

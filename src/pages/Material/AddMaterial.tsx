import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react';
import { BreadCrumb } from '@codeHimalaya/components/breadCrumb';
import { Input } from '@codeHimalaya/components/form';
import {
  IMaterialRequest,
  useAddMaterial,
} from '@codeHimalaya/service/material-service';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';
import { NAVIGATION_ROUTES } from '@codeHimalaya/routes/routes.constant';
const defaultValues: IMaterialRequest = {
  name: '',
};

const schema = z.object({
  name: z.string().min(1, 'Material name is required'),
});

const AddMaterial = () => {
  const addMaterial = useAddMaterial();

  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmitHandler = async (purchaseDetails: IMaterialRequest) => {
    await addMaterial.mutateAsync(purchaseDetails);
  };
  return (
    <Box>
      <BreadCrumb
        items={[
          {
            name: 'Add Material',
            route: '/material/add-material',
          },
        ]}
        title={{ name: 'Material', route: NAVIGATION_ROUTES.MATERIAL }}
      />
      <Flex>
        <Box
          background={'#fff'}
          width={'100%'}
          padding={'10px 20px'}
          borderRadius={'11px'}
          height={'100%'}
        >
          <Text fontWeight={800} fontSize={'28px'} mt={2}>
            Add Material
          </Text>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <VStack pt={10} spacing={8} alignItems={'flex-start'}>
              <Input
                name={'name'}
                type="text"
                label={'Material Name'}
                control={control}
                required
              />

              <Button
                isLoading={addMaterial.isLoading}
                alignSelf={'self-start'}
                type="submit"
                borderRadius={'6px'}
              >
                Add Material
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddMaterial;

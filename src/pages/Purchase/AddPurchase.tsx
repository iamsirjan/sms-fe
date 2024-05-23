import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BreadCrumb } from '@codeHimalaya/components/breadCrumb';
import { Input, Select } from '@codeHimalaya/components/form';
import { useGetMaterial } from '@codeHimalaya/service/material-service';
import {
  IPurchaseRequestData,
  useAddPurchase,
} from '@codeHimalaya/service/purchase-service';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import Calendar from '@sbmdkl/nepali-datepicker-reactjs';
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';
import { useState } from 'react';
const defaultValues: IPurchaseRequestData = {
  name_id: '',
  quantity: '',
  rate: '',
};

const schema = z.object({
  name_id: z.string().min(1, 'Product name is required'),
  quantity: z
    .string()
    .min(1, 'quantity can not be empty')
    .refine(
      (value) => {
        const numericValue = parseFloat(value);
        return numericValue > 0;
      },
      {
        message: 'Quantity can not be  0',
      },
    ),
  rate: z
    .string()
    .min(1, 'rate can not be empty')
    .refine(
      (value) => {
        const numericValue = parseFloat(value);
        return numericValue > 0;
      },
      {
        message: 'Rate should be greater than 0',
      },
    ),
});

const AddPurchase = () => {
  const addPurchase = useAddPurchase();
  const [date, setDate] = useState('');

  const { data: materialData } = useGetMaterial();

  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: defaultValues,
    resolver: zodResolver(schema),
  });

  const options = materialData?.map((data) => {
    return {
      label: data.name,
      value: data.id,
    };
  });
  const onSubmitHandler = async (purchaseDetails: IPurchaseRequestData) => {
    const data = {
      ...purchaseDetails,
      created_at: date,
    };
    await addPurchase.mutateAsync(data);
  };
  return (
    <Box>
      <BreadCrumb
        items={[
          {
            name: 'Add Purchase',
            route: '/purchase/add-purchase',
          },
        ]}
        title={{ name: 'Purchase', route: '/purchase' }}
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
            Add Purchase
          </Text>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <VStack pt={10} spacing={8} alignItems={'flex-start'}>
              <Select
                name={'name_id'}
                label={'Product Name'}
                control={control}
                required
                placeholder="select product"
                options={options ?? []}
              />
              <Input
                name={'quantity'}
                type="number"
                label={'Quantity'}
                control={control}
                required
              />
              <Input
                name={'rate'}
                type="number"
                label={'Rate'}
                control={control}
                required
              />
              <Box>
                <Text mb={3}>Purchase Date</Text>
                <Calendar
                  value={date}
                  theme="deepdark"
                  style={{
                    margin: '0px',
                    background: 'inherit',
                    border: '1px solid #efefef',
                    padding: 5,
                    borderRadius: '6px',
                  }}
                  onChange={(date) => setDate(date.adDate)}
                />
              </Box>
              <Button
                isLoading={addPurchase.isLoading}
                alignSelf={'self-start'}
                type="submit"
                borderRadius={'6px'}
              >
                Add Purchase
              </Button>
            </VStack>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddPurchase;

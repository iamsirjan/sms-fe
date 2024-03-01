import { Button, Flex } from '@chakra-ui/react';
import {
  FileUpload,
  Input,
  Select,
  TextArea,
} from '@codeHimalaya/components/form';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonGroup from '../Buttons';

const defaultValues: LoginDetails = {
  userName: '',
  password: '',
  paymentGateway: '',
  fileUpload: '',
  description: '',
};
const schema = yup.object().shape({
  userName: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  paymentGateway: yup.string().required('Payment gateway is required'),
  fileUpload: yup.string().required('File is required'),
  description: yup.string().required('Description is required'),
});

const options = [
  { label: 'ESEWA', value: '0' },
  { label: 'KHALTI', value: '1' },
];

const FormFields = () => {
  const formControl = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { control, handleSubmit } = formControl;

  const onSubmitHandler = (data: LoginDetails) => {
    alert(data);
  };
  return (
    <FormProvider {...formControl}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Flex direction={'column'} gap={3}>
          <Input name={'userName'} label={'Username'} control={control} />
          <Input
            name={'password'}
            label={'Password'}
            type={'password'}
            control={control}
          />
          <Select
            name="paymentGateway"
            label="Payment Gateway"
            control={control}
            options={options}
          />
          <FileUpload
            name={'fileUpload'}
            control={control}
            label={'Upload file'}
          />
          <TextArea
            name={'description'}
            label={'Description'}
            control={control}
          />
          <Button type="submit">Submit</Button>
        </Flex>
      </form>
      <ButtonGroup />
    </FormProvider>
  );
};
export default FormFields;

export interface LoginDetails {
  userName: string;
  password: string;
  paymentGateway: string;
  fileUpload: string;
  description: string;
}

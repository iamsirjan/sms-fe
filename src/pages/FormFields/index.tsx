import { Button, Flex } from '@chakra-ui/react';
import { FileUpload, Input } from '@codeHimalaya/components/form';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextArea from '@codeHimalaya/components/form/TextArea';
import ButtonGroup from '../Buttons';

const defaultValues: LoginDetails = {
  userName: '',
  password: '',
  fileUpload: '',
  description: '',
};
const schema = yup.object().shape({
  userName: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  fileUpload: yup.string().required('File is required'),
  description: yup.string().required('Description is required'),
});

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
  fileUpload: string;
  description: string;
}

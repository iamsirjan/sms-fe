import {
  FormControl,
  FormLabel,
  Box,
  Flex,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FieldValues, useController } from 'react-hook-form';
import { IInputField } from './interface';
import Text from './text';
import { Type } from './constants';
import { Password } from './password';

const Input = <T extends FieldValues>(props: IInputField<T>) => {
  const {
    name,
    control,
    label,
    type,
    formControlProps,
    orientation = 'vertical',
    ...rest
  } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const FieldComponent = type === Type.PASSWORD ? Password : Text;

  return (
    <FormControl isInvalid={!!error} {...formControlProps}>
      <Box display={orientation === 'horizontal' ? 'flex' : 'block'}>
        {label && formControlProps?.variant !== 'floating' && (
          <FormLabel>{label}</FormLabel>
        )}
        <FieldComponent field={field} {...rest} />
      </Box>
      {error && (
        <Flex justifyContent={'space-between'}>
          <FormErrorMessage>{error.message}</FormErrorMessage>
        </Flex>
      )}
    </FormControl>
  );
};
export { Input };

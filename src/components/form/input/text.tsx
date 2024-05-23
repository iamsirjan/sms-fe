import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  Icon,
  InputRightElement,
} from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';
import { ICustomInput } from './interface';

const Text = <T extends FieldValues>({
  leftIcon,
  rightIcon,
  field,
  type,
}: ICustomInput<T>) => {
  return (
    <InputGroup>
      {leftIcon && (
        <InputLeftElement>
          <Icon as={leftIcon} />
        </InputLeftElement>
      )}
      <ChakraInput type={type} {...field} />
      {rightIcon && (
        <InputRightElement>
          <Icon as={rightIcon} />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export default Text;

import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
} from '@chakra-ui/react';
import { codeHimalaya_colors } from '@codeHimalaya/theme/color';
import { IInput } from './Input';

const FileUpload = ({
  label,
  helperText,
  name,
  error = '',
  rules,
  register,
  isDisabled,
  labelDisabled,
  isRequired,
  required,
  ...rest
}: IInput) => {
  return (
    <FormControl
      isInvalid={!!error}
      isRequired={isRequired}
      isDisabled={isDisabled}
    >
      {label && (
        <FormLabel htmlFor={name} fontWeight={600} fontSize={'18px'}>
          {label}
          {required && (
            <span style={{ color: codeHimalaya_colors.black }}>&nbsp;*</span>
          )}
        </FormLabel>
      )}
      {labelDisabled && (
        <FormLabel
          htmlFor={name}
          fontWeight={400}
          fontSize={'16px'}
          opacity={'1 !important'}
        >
          {labelDisabled}
        </FormLabel>
      )}
      <InputGroup>
        <ChakraInput
          id={name}
          type={'file'}
          {...register(name, rules)}
          {...rest}
        />
      </InputGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default FileUpload;

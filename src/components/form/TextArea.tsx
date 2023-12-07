import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react';
import { codeHimalaya_colors } from '@codeHimalaya/theme/color';
import { RegisterOptions, UseFormRegister, FieldValues } from 'react-hook-form';

const TextArea = ({
  label,
  helperText,
  name,
  error = '',
  rules,
  register,
  isRequired,
  required,
  ...rest
}: ITextArea) => {
  return (
    <FormControl isInvalid={!!error} isRequired={isRequired}>
      {label && (
        <FormLabel htmlFor={name} fontWeight={600} fontSize={'18px'}>
          {label}
          {required && (
            <span style={{ color: codeHimalaya_colors.red }}>&nbsp;*</span>
          )}
        </FormLabel>
      )}
      <Textarea
        sx={{ fontSize: 14, height: 120 }}
        id={name}
        size="xl"
        resize={'none'}
        {...register(name, rules)}
        {...rest}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export interface ITextArea<TFieldValues extends FieldValues = FieldValues>
  extends TextareaProps {
  label?: string;
  helperText?: string;
  error?: string;
  name: string;
  register: UseFormRegister<TFieldValues>;
  rules?: RegisterOptions;
  isRequired?: boolean;
  required?: boolean;
}

export default TextArea;

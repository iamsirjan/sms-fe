import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  FormErrorMessage,
  FormHelperText,
  InputProps,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { asheshDon_colors } from '@asheshDon/theme/color';
import { RegisterOptions, UseFormRegister, FieldValues } from 'react-hook-form';

const Input = ({
  label,
  helperText,
  name,
  error = '',
  rules,
  register,
  isDisabled,
  labelDisabled,
  isRequired,
  type,
  startIcon,
  endIcons,
  onIconClick,
  required,
  color,
  steps,
  ...rest
}: IInput) => {
  return (
    <FormControl
      isInvalid={!!error}
      isRequired={isRequired}
      isDisabled={isDisabled}
    >
      {label && (
        <FormLabel
          htmlFor={name}
          fontWeight={600}
          fontSize={'18px'}
          color={color ? color : ''}
        >
          {label}
          {required && (
            <span style={{ color: asheshDon_colors.black }}>&nbsp;*</span>
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
        {startIcon ? (
          <InputLeftElement
            top="12%"
            pointerEvents="none"
            onClick={onIconClick}
          >
            {startIcon}
          </InputLeftElement>
        ) : (
          ''
        )}
        <ChakraInput
          id={name}
          type={type}
          step={steps ? steps : 0.1}
          _placeholder={{ fontSize: '16px' }}
          {...register(name, rules)}
          {...rest}
        />
        {endIcons ? (
          <InputRightElement onClick={onIconClick} top="8%">
            {endIcons}
          </InputRightElement>
        ) : (
          ''
        )}
      </InputGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};
export interface IInput<TFieldValues extends FieldValues = FieldValues>
  extends InputProps {
  label?: string;
  helperText?: string;
  error?: string;
  name: string;
  register: UseFormRegister<TFieldValues>;
  rules?: RegisterOptions;
  isRequired?: boolean;
  isDisabled?: boolean;
  startIcon?: React.ReactNode;
  endIcons?: React.ReactNode;
  onIconClick?: () => void;
  required?: boolean;
  labelDisabled?: string;
  color?: string;
  steps?: number;
}
export default Input;

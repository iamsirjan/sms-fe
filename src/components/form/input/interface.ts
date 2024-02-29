import { FormControlProps, InputProps, TextareaProps } from '@chakra-ui/react';
import { FunctionComponent, SVGProps } from 'react';
import {
  Control,
  ControllerRenderProps,
  FieldValues,
  Path,
} from 'react-hook-form';

type IField<T extends FieldValues> = {
  control: Control<T, unknown>;
  name: Path<T>;
  label?: string;
  formControlProps?: FormControlProps;
  orientation?: 'horizontal' | 'vertical';
  leftIcon?: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
  rightIcon?: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
};
export type IInputField<T extends FieldValues> = InputProps & IField<T>;
export type ITextArea<T extends FieldValues> = TextareaProps & IField<T>;

export type ICustomInput<T extends FieldValues> = InputProps &
  Pick<IInputField<T>, 'leftIcon' | 'rightIcon'> & {
    field: ControllerRenderProps<T, Path<T>>;
  };

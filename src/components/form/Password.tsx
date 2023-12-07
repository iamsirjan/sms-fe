import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import { IconButton, InputProps } from '@chakra-ui/react';
import { codeHimalaya_colors } from '@codeHimalaya/theme/color';
import FormControl from './FormControl';

enum Type {
  TEXT = 'type',
  PASSWORD = 'password',
}

const PasswordViewIcon = ({ onToggle, isVisible }: ISetPasswordViewIcon) => {
  return (
    <IconButton
      aria-label="password"
      onClick={onToggle}
      icon={isVisible ? <ViewIcon /> : <ViewOffIcon />}
      sx={{
        bgColor: 'transparent',
        '&:focus': { outline: 'none' },
        color: codeHimalaya_colors.black,
        '&:hover': {
          bgColor: 'transparent',
          color: codeHimalaya_colors.primary,
        },
      }}
    />
  );
};

const Password = ({ isVisible, onToggleVisibility, ...rest }: IPassword) => {
  return (
    <FormControl
      control="input"
      {...{
        type: isVisible ? Type.TEXT : Type.PASSWORD,
        required: true,
        ...rest,
        endIcons: (
          <PasswordViewIcon
            onToggle={onToggleVisibility}
            isVisible={isVisible}
          />
        ),
      }}
    />
  );
};

interface ISetPasswordViewIcon {
  onToggle: () => void;
  isVisible: boolean;
}

export interface IPassword extends InputProps {
  isVisible: boolean;
  onToggleVisibility: () => void;
}

export default Password;

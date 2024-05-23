import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import React from 'react';

type IProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onClick: () => void;
  isLoading: boolean;
};
const AlertDialogComponent = ({
  isOpen,
  onClose,
  title,
  description,
  onClick,
  isLoading,
}: IProps) => {
  const cancelRef = React.useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>{description}</AlertDialogBody>

          <AlertDialogFooter gap={2}>
            <Button variant={'outline'} onClick={onClose} ref={cancelRef}>
              Cancel
            </Button>
            <Button variant={'danger'} onClick={onClick} isLoading={isLoading}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default AlertDialogComponent;

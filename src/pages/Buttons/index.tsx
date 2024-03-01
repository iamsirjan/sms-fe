import { Button, Flex } from '@chakra-ui/react';

const ButtonGroup = () => {
  return (
    <Flex direction={'column'} gap={4}>
      <Button>Primary</Button>
      <Button variant={'outline'}>Outline</Button>
    </Flex>
  );
};

export default ButtonGroup;

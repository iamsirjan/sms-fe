import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ListItem, Link, Flex, Text } from '@chakra-ui/react';

const Item = ({
  name,
  to,
  icon,
  active,
  isCollapse,
  isChild,
}: {
  name: string;
  to: string;
  icon?: React.ReactNode;
  active: boolean;
  isCollapse?: boolean;
  isChild?: boolean;
}) => {
  const { t } = useTranslation();
  if (location.pathname === to) active = true;
  return (
    <Link as={RouterLink} to={to} color={'white'}>
      <ListItem
        display={'flex'}
        mr={4}
        ml={isChild ? 10 : 4}
        p={2}
        mb={3}
        borderRadius={'md'}
        bgColor={active ? (isChild ? 'secondary.500' : 'primary.500') : ''}
        transition="all ease-in-out"
        color={active ? (isChild ? 'gray.200' : 'white') : 'gray.200'}
        sx={{
          'svg path': {
            transition: 'all ease-in-out',
            fill: `${active ? 'white' : ''}`,
          },
          '&:hover': {
            transition: 'all ease-in-out',
            textDecoration: 'none',
            color: isChild ? 'gray.200' : 'white',
            bgColor: isChild ? 'secondary.500' : 'primary.500',
            'svg path': {
              transition: 'all ease-in-out',
              fill: `${name !== 'Logout' ? 'white' : ''}`,
            },
          },
        }}
        fontSize="md"
        fontWeight="semibold"
      >
        <Flex alignItems="center" justify={isCollapse ? 'center' : 'left'}>
          {icon}
          {!isCollapse && (
            <Text ml={3} whiteSpace="nowrap">
              {t(name)}
            </Text>
          )}
        </Flex>
      </ListItem>
    </Link>
  );
};

export default Item;

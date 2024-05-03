import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  BreadcrumbItem,
  Breadcrumb,
  BreadcrumbLink,
  Text,
  Flex,
  Button,
  Box,
  Divider,
  Icon,
} from '@chakra-ui/react';
import { getSidebarState } from '@codeHimalaya/components/layouts/Layout';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useAuthProvider } from '@codehimalaya/authentication_service';

interface IBreadCrumb {
  items: { name: string; route: string }[];
  goBack?: string;
  title: { name: string; route: string };
}

export const BreadCrumb = ({ items, goBack, title }: IBreadCrumb) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { logout } = useAuthProvider();

  const { showSidebar, setShowSidebar } = getSidebarState();

  return (
    <Box pb={6} my={6}>
      <Flex justifyContent="space-between" alignItems="center" height={4}>
        <Breadcrumb spacing={1} separator={''}>
          <Box _hover={{ cursor: 'pointer' }}>
            <RxHamburgerMenu onClick={() => setShowSidebar(!showSidebar)} />
          </Box>

          <BreadcrumbItem>
            <BreadcrumbLink>
              <Flex alignItems={'center'}>
                <Text
                  fontWeight={'bold'}
                  color={'primary.500'}
                  fontSize={{ base: 'xl', md: '3xl' }}
                  _hover={{}}
                  onClick={() => navigate(title.route)}
                >
                  {title.name}
                </Text>
                {items.length != 0 && (
                  <Divider
                    orientation="vertical"
                    borderColor={'black'}
                    height={'30px'}
                    mx={2}
                    borderWidth="1px"
                  />
                )}
              </Flex>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {items.map((item, i) => (
            <BreadcrumbItem key={i}>
              <BreadcrumbLink onClick={() => navigate(item.route)}>
                <Text fontWeight={'bold'} color={'primary.500'}>
                  {item.name}
                </Text>
              </BreadcrumbLink>
              {items.length - 1 !== i && (
                <Icon
                  as={ChevronRightIcon}
                  color={'gray.200'}
                  fontSize="xl"
                  pb={0.5}
                  ml={2}
                />
              )}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>

        <Button onClick={logout} variant={'outline'}>
          Logout
        </Button>
        {goBack && (
          <Button
            size={'xs'}
            onClick={() => {
              navigate(goBack);
            }}
          >
            {t('global_goBack')}
          </Button>
        )}
      </Flex>
    </Box>
  );
};

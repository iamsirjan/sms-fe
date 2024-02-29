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
import { NotificationIcon } from '@codeHimalaya/assets/svgs';
import { getSidebarState } from '@codeHimalaya/components/layouts/Layout';
import { codeHimalaya_colors } from '@codeHimalaya/theme/color';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
interface IBreadCrumb {
  items: { name: string; route: string }[];
  goBack?: string;
  title: { name: string; route: string };
}

export const BreadCrumb = ({ items, goBack, title }: IBreadCrumb) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
                  fontWeight={700}
                  color={codeHimalaya_colors.primary}
                  fontSize={{ base: '22px', md: '32px' }}
                  _hover={{}}
                  onClick={() => navigate(title.route)}
                >
                  {title.name}
                </Text>
                {items.length != 0 && (
                  <Divider
                    orientation="vertical"
                    borderColor={codeHimalaya_colors.black}
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
                <Text fontWeight={700} color={codeHimalaya_colors.primary}>
                  {item.name}
                </Text>
              </BreadcrumbLink>
              {items.length - 1 !== i && (
                <Icon
                  as={ChevronRightIcon}
                  color={codeHimalaya_colors.light_gray_text}
                  fontSize="xl"
                  pb={0.5}
                  ml={2}
                />
              )}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
        <Flex
          bgColor={codeHimalaya_colors.white}
          borderRadius={'30px'}
          width={'48px'}
          height={'48px'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Icon as={NotificationIcon} fontSize="2xl"></Icon>
        </Flex>
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

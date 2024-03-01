import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import Item from './Item';
import { RightArrowIcon } from '@codeHimalaya/assets/svgs';

const NavItem = ({ name, to, child, icon, isCollapse, visible }: INavItem) => {
  const match =
    location.pathname.match(/services/g) || location.pathname.match(/forum/g);

  const activeParent = child?.some((item) => item.to === location.pathname);

  const [active, setActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(activeParent);

  useEffect(() => {
    setActive((!child && to === location.pathname) || to === `/${match?.[0]}`);
  }, [location.pathname]);

  return (
    <>
      {visible ? (
        child ? (
          <>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              p={2}
              mx={4}
              mb={3}
              borderRadius={'md'}
              bgColor={activeParent ? 'primary.500' : ''}
              color={activeParent ? 'white' : ''}
              transition="all ease-in-out"
              cursor="pointer"
              sx={{
                'svg path': {
                  transition: 'all ease-in-out',
                  fill: `${activeParent ? 'white' : ''}`,
                },
                '&:hover': {
                  transition: 'all ease-in-out',
                  bgColor: 'primary.500',
                  color: 'white',
                  'svg path': {
                    transition: 'all ease-in-out',
                    fill: 'white',
                  },
                },
              }}
              fontSize="md"
              fontWeight="semibold"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <Flex
                alignItems="center"
                justify={isCollapse ? 'center' : 'left'}
                sx={{
                  '& *': {
                    '&:hover': {
                      transition: 'all ease-in-out',
                      color: 'white',
                    },
                  },
                }}
              >
                {icon}
                {!isCollapse && (
                  <Text ml={3} whiteSpace="nowrap">
                    {name}
                  </Text>
                )}
              </Flex>
              {!isCollapse && (
                <Icon
                  as={RightArrowIcon}
                  fontSize="xs"
                  sx={{
                    transform: showDropdown ? 'rotate(90deg)' : '',
                    transition: '0.1s',
                    '&:hover': {
                      cursor: 'pointer',
                      transition: '0.1s',
                    },
                  }}
                />
              )}
            </Flex>
            {showDropdown && !isCollapse && (
              <Box>
                {child.map((c: INavItemChild) => {
                  return (
                    <React.Fragment key={c.name}>
                      {c.visible ? (
                        <Item
                          active={active}
                          name={c.name}
                          to={c.to}
                          icon={c?.icon}
                          isCollapse={isCollapse}
                          isChild={true}
                        />
                      ) : (
                        <></>
                      )}
                    </React.Fragment>
                  );
                })}
              </Box>
            )}
          </>
        ) : (
          <Item
            active={active}
            name={name}
            to={to}
            icon={icon}
            isCollapse={isCollapse}
          />
        )
      ) : (
        <></>
      )}
    </>
  );
};

interface INavItem {
  visible: boolean;
  name: string;
  to: string;
  child?: INavItemChild[];
  icon?: React.ReactNode;
  isCollapse?: boolean;
}

interface INavItemChild {
  visible: boolean;
  name: string;
  to: string;
  icon?: React.ReactNode;
}
export default NavItem;

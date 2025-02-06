'use client';

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  useBreakpointValue,
  IconButton,
  VStack,
  Text,
} from '@chakra-ui/react';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from '@/components/ui/menu';
import {
  DrawerRoot,
  DrawerContent,
  DrawerTrigger,
  DrawerHeader,
  DrawerBody,
  DrawerCloseTrigger,
} from '@/components/ui/drawer';
import { useState } from 'react';

export const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isResourceOpen, setIsResourceOpen] = useState(false); // Add this state

  return (
    <Box as="nav" py={4} borderBottom="1px" mt={10}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          {/* Logo */}
          <Link href="/">
            <HStack gap={2}>
              <Image
                src="/assets/logos.svg"
                alt="3XG Merchant"
                h={['30px', '33px', '35px', '37px']}
              />
            </HStack>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <HStack gap={8}>
                <Link
                  href="/"
                  fontWeight="medium"
                  color="#808080"
                  position="relative"
                  _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: '-6px',
                    left: '0',
                    width: '50%',
                    height: '2px',
                    backgroundColor: '#E7906B',
                    display: 'block',
                    textDecoration: 'none',
                  }}
                >
                  Home
                </Link>
                <Link
                  href="/how-it-works"
                  fontWeight="medium"
                  color="#808080"
                  position="relative"
                  _hover={{
                    _after: {
                      content: '""',
                      position: 'absolute',
                      bottom: '-6px',
                      left: '0',
                      width: '50%',
                      height: '2px',
                      backgroundColor: '#E7906B',
                      display: 'block',
                      textDecoration: 'none',
                    },
                  }}
                >
                  How it works
                </Link>
                <MenuRoot>
                  <MenuTrigger asChild>
                    <Link
                      fontWeight="medium"
                      color="#808080"
                      position="relative"
                      display="flex"
                      alignItems="center"
                      gap={1}
                      _hover={{
                        _after: {
                          content: '""',
                          position: 'absolute',
                          bottom: '-6px',
                          left: '0',
                          width: '50%',
                          height: '2px',
                          backgroundColor: '#E7906B',
                          display: 'block',
                        },
                      }}
                    >
                      Resource
                      <Image src="/assets/downs.svg" alt="" w="10px" h="4px" />
                    </Link>
                  </MenuTrigger>
                  <MenuContent
                    bg="white"
                    boxShadow="0px 1px 4px 1px #00000040"
                    rounded="md"
                    p={2}
                    minW="200px"
                  >
                    <MenuItem
                      value="customer-support"
                      color="#E7906B"
                      borderBottom="1px solid #3434341A"
                      py={2}
                    >
                      Customer Support
                    </MenuItem>
                    <MenuItem
                      value="faq"
                      color="#E7906B"
                      borderBottom="1px solid #3434341A"
                      py={2}
                    >
                      FAQ
                    </MenuItem>
                    <MenuItem
                      value="terms"
                      color="#E7906B"
                      borderBottom="1px solid #3434341A"
                      py={2}
                    >
                      Terms of Use
                    </MenuItem>
                    <MenuItem value="privacy" color="#E7906B" py={2}>
                      Privacy & Policy
                    </MenuItem>
                  </MenuContent>
                </MenuRoot>
              </HStack>

              {/* Desktop Action Buttons */}
              <HStack gap={4}>
                <Button variant="ghost" colorScheme="gray" color="#E7906B">
                  Login
                </Button>
                <Button
                  bg="rgb(231, 146, 113)"
                  color="white"
                  _hover={{ bg: 'rgb(220, 135, 102)' }}
                >
                  Get Started
                </Button>
              </HStack>
            </>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <DrawerRoot>
              <DrawerTrigger asChild>
                <IconButton aria-label="Open menu" variant="ghost" />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerCloseTrigger />
                </DrawerHeader>
                <DrawerBody>
                  <VStack align="stretch" gap={4}>
                    <Link href="/" fontWeight="medium" color="#808080">
                      Home
                    </Link>
                    <Link
                      href="/how-it-works"
                      fontWeight="medium"
                      color="#808080"
                    >
                      How it works
                    </Link>

                    {/* Mobile Menu Resources Section */}
                    <Box>
                      <Flex
                        cursor="pointer"
                        align="center"
                        gap={1}
                        fontWeight="medium"
                        color="#808080"
                        onClick={() => setIsResourceOpen(!isResourceOpen)}
                      >
                        Resource
                        <Image
                          src="/assets/downs.svg"
                          alt=""
                          w="10px"
                          h="4px"
                          transform={
                            isResourceOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                          }
                          transition="transform 0.2s"
                          mt={1}
                          ml={1}
                        />
                      </Flex>

                      {isResourceOpen && (
                        <VStack
                          align="stretch"
                          mt={2}
                          bg="white"
                          rounded="md"
                          p={2}
                          gap={2}
                        >
                          <Text
                            color="#E7906B"
                            py={2}
                            cursor="pointer"
                            borderBottom="1px solid #3434341A"
                          >
                            Customer Support
                          </Text>
                          <Text
                            color="#E7906B"
                            py={2}
                            cursor="pointer"
                            borderBottom="1px solid #3434341A"
                          >
                            FAQ
                          </Text>
                          <Text
                            color="#E7906B"
                            py={2}
                            cursor="pointer"
                            borderBottom="1px solid #3434341A"
                          >
                            Terms of Use
                          </Text>
                          <Text color="#E7906B" py={2} cursor="pointer">
                            Privacy & Policy
                          </Text>
                        </VStack>
                      )}
                    </Box>

                    <Button variant="ghost" colorScheme="gray" color="#E7906B">
                      Login
                    </Button>
                    <Button
                      bg="rgb(231, 146, 113)"
                      color="white"
                      _hover={{ bg: 'rgb(220, 135, 102)' }}
                    >
                      Get Started
                    </Button>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </DrawerRoot>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Link,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box as="footer" bg="black" color="white" py={10} position="relative">
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        display="flex"
        justifyContent="center"
        zIndex={0}
      >
        <Image
          src="/assets/watermark.svg"
          alt="3XG Watermark"
          width="393px"
          height="auto"
        />
      </Box>
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(3, 1fr)',
            lg: '1.2fr 0.8fr 0.8fr 0.8fr 0.8fr 1.2fr',
          }}
          gap={8}
        >
          {/* Subscribe Section */}
          <Box>
            <Image src="/assets/logo.svg" alt="3XG" h="32px" mb={4} />
            <Text mb={4} fontSize="14px">
              Subscribe
            </Text>
            <Text mb={4} fontSize="14px">
              Get updates on our latest offer!
            </Text>
            <Flex>
              <Input
                placeholder="Enter your email"
                bg="transparent"
                borderColor="white"
                borderRadius="md"
                _placeholder={{ color: 'gray.400' }}
              />
              <Box as="button" ml={-10} zIndex={2} cursor="pointer">
                <Image src="/assets/icon-send.svg" alt="Submit" h="20px" />
              </Box>
            </Flex>
          </Box>

          {/* Support Section */}
          <Box>
            <Heading fontSize="16px" mb={4}>
              Support
            </Heading>
            <VStack align="start" gap={3}>
              <Text fontSize="14px">3XGsupport@gmail.com</Text>
              <Text fontSize="14px">+2348192003981</Text>
            </VStack>
          </Box>

          {/* Account Section */}
          <Box>
            <Heading mb={4} fontSize="16px">
              Account
            </Heading>
            <VStack align="start" gap={3}>
              <Link
                color="white"
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                fontSize="14px"
              >
                My Account
              </Link>
              <Link
                color="white"
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                fontSize="14px"
              >
                Login / Register
              </Link>
              <Link
                color="white"
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                fontSize="14px"
              >
                My Order
              </Link>
              <Link
                color="white"
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                fontSize="14px"
              >
                Warranty Portal
              </Link>
              <Link
                color="white"
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                fontSize="14px"
              >
                Coupon
              </Link>
            </VStack>
          </Box>

          {/* About 3XG Section */}
          <Box>
            <Heading fontSize="16px" mb={4}>
              About 3XG
            </Heading>
            <VStack align="start" gap={3}>
              <Link
                color="white"
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                fontSize="14px"
              >
                About Us
              </Link>
              <Link
                color="white"
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                fontSize="14px"
              >
                Contact
              </Link>
              <Link
                color="white"
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                fontSize="14px"
              >
                FAQ
              </Link>
              <Link
                color="white"
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                fontSize="14px"
              >
                Warranty Policy
              </Link>
              <Link
                color="white"
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                fontSize="14px"
              >
                Privacy Policy
              </Link>
              <Link
                color="white"
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                fontSize="14px"
              >
                Terms Of Use
              </Link>
            </VStack>
          </Box>

          {/* Make Money Section */}
          <Box>
            <Heading fontSize="16px" mb={4}>
              Make money on 3XG
            </Heading>
            <VStack align="start" gap={3}>
              <Link
                color="#E7906B"
                textDecoration="none"
                _hover={{ textDecoration: 'none' }}
                fontSize="14px"
              >
                Become a seller
              </Link>
            </VStack>
          </Box>

          {/* Download App Section */}
          <Box>
            <Heading fontSize="16px" mb={4}>
              Download App
            </Heading>
            <Text mb={4} fontSize="14px">
              Get access to exclusive offers!
            </Text>
            <Flex gap={4}>
              <Image src="/assets/qr.svg" alt="QR Code" h="90px" />
              <VStack align="start" gap={2}>
                <Link>
                  <Image
                    src="/assets/GooglePlay.svg"
                    alt="Get it on Google Play"
                    h="40px"
                  />
                </Link>
                <Link>
                  <Image
                    src="/assets/AppStore.svg"
                    alt="Download on App Store"
                    h="40px"
                  />
                </Link>
              </VStack>
            </Flex>
            <HStack gap={8} mt={4}>
              <Link>
                <Image src="/assets/facebook.svg" alt="Facebook" h="24px" />
              </Link>
              <Link>
                <Image src="/assets/twitter.svg" alt="Twitter" h="24px" />
              </Link>
              <Link>
                <Image src="/assets/instagram.svg" alt="Instagram" h="24px" />
              </Link>
              <Link>
                <Image src="/assets/in.svg" alt="LinkedIn" h="24px" />
              </Link>
            </HStack>
          </Box>
        </Grid>

        <Box
          pt={16}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box borderTop="1px solid rgba(255, 255, 255, 0.1)" width="100%" />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            pt={16} // Increased top padding
          >
            <Text textAlign="center" color="white" fontSize="16px">
              © Copyright 3XG africa 2022. All right reserved
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

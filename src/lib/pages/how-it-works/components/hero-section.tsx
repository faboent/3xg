import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { Header } from '../../../layout/components/header';
export const HeroSection = () => {
  return (
    <Box bg="white">
      <Header />
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          justify="space-between"
          gap={8}
          px={3}
          mt={10}
        >
          <Box flex="1" maxW={{ base: '100%', lg: '50%' }}>
            <Heading
              fontSize={['32px', '36px', '40px']}
              color="navy.900"
              mb={6}
              borderRadius="10px"
            >
              How it works?
            </Heading>
            <Text
              fontSize={['16px', '18px']}
              color="gray.600"
              mb={8}
              lineHeight="tall"
            >
              Getting started as a seller is simple and quick. Follow these easy
              steps to set up your store, list your products, and start selling
              to a global audience
            </Text>
            <Button
              bg="rgb(231, 146, 113)"
              color="white"
              size="lg"
              _hover={{ bg: 'rgb(220, 135, 102)' }}
              borderRadius="10px"
            >
              Get Started
            </Button>
          </Box>

          <Box flex="1" maxW={{ base: '100%', lg: '50%' }}>
            <Image
              src="/assets/works.svg"
              alt="How it works illustration"
              w="full"
              h="auto"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

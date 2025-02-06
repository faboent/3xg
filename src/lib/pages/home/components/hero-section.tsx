import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import { Header } from '../../../layout/components/header';

export const HeroSection = () => {
  return (
    <Container maxW="container.xl" bg="#E7906B1F">
      <Header />
      <Flex
        direction="column"
        alignItems="center"
        textAlign="center"
        gap={8}
        position="relative"
        borderRadius="xl"
        py={16}
        px={3}
        mt={5}
      >
        <Box
          position="absolute"
          left="10%"
          top="5%"
          display={['none', 'none', 'block', 'block']}
        >
          <Image
            src="/assets/55.svg"
            alt="Decorative star"
            w={['25px', '30px', '35px', '40px']}
            zIndex={-1}
          />
        </Box>
        <Box
          position="absolute"
          right="17%"
          top="20%"
          display={['none', 'none', 'block', 'block']}
        >
          <Image
            src="/assets/arrow.svg"
            alt="Decorative arrow"
            w={['40px', '45px', '50px', '60px']}
            zIndex={-1}
          />
        </Box>

        <Flex align="center" gap={2}>
          <Image
            src="/assets/frame.svg"
            alt="Decorative arrow"
            w={['120px', '140px', '160px', '177px']}
          />
          <Text fontWeight="medium" color="navy.900">
            Over 1,000 merchants
          </Text>
        </Flex>

        <Heading
          as="h1"
          fontSize={['32px', '36px', '42px', '48px']}
          color="navy.900"
          maxW="800px"
          lineHeight="1.2"
          position="relative"
          zIndex={1}
        >
          Become a Merchant: Grow Your Business on Our True Omni-Channel
          Marketplace
        </Heading>

        <Text color="gray.600" fontSize="14px" maxW="800px">
          Ready to expand your customer base and boost your sales? Becoming a
          merchant on our platform opens the door to endless opportunities.
          Whether you&apos;re offering the latest tech gadgets or unique
          electronic accessories, we provide the tools to turn your business
          into a profitable success with ease..
        </Text>

        <HStack gap={4} pt={4}>
          <Button
            size="lg"
            bg="rgb(231, 146, 113)"
            color="white"
            px={[4, 6, 8, 8]}
            borderRadius="10px"
            _hover={{ bg: 'rgb(220, 135, 102)' }}
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            borderColor="rgb(231, 146, 113)"
            color="rgb(231, 146, 113)"
            px={[4, 6, 8, 8]}
            borderRadius="10px"
            _hover={{ bg: 'rgb(231, 146, 113, 0.1)' }}
          >
            How it works
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

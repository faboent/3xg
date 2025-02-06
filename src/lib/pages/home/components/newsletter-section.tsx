import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Link,
  Text,
} from '@chakra-ui/react';

export const NewsletterSection = () => {
  return (
    <Box py={20} bg="white">
      <Container maxW="container.xl">
        <Box maxW="600px" px={6}>
          <Heading
            fontSize={['24px', '26px', '28px', '32px']}
            mb={4}
            color="navy.900"
          >
            Subscribe to our newsletter
          </Heading>

          <Text
            fontSize={['16px', '18px', '19px', '20px']}
            mb={8}
            color="gray.700"
          >
            Stay updated with the latest offer and news from 3XG
          </Text>

          <Box display="flex" gap={4} mb={4}>
            <Input
              placeholder="Email address"
              size="lg"
              bg="white"
              borderRadius="md"
              borderColor="#000000"
              flex="1"
              _placeholder={{ color: 'gray.400' }}
            />
            <Button
              size="lg"
              bg="#E7906B"
              color="white"
              px={[4, 6, 8, 8]}
              _hover={{ bg: 'rgb(220, 135, 102)' }}
              borderRadius="5px"
            >
              Subscribe
            </Button>
          </Box>

          <Text fontSize="sm" color="gray.500">
            By joining, you agree to our{' '}
            <Link color="rgb(231, 146, 113)" href="/terms">
              terms and conditions
            </Link>
            .
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

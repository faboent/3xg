import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';

const steps = [
  {
    title: 'Optimize Your Listings',
    description:
      'Use high-quality images, detailed descriptions, and relevant keywords to make your products stand out and improve search visibility.',
    icon: '/assets/fluent.svg',
  },
  {
    title: 'Provide Excellent Customer Service',
    description:
      'Respond promptly to customer inquiries, address issues professionally, and deliver great after-sales support to encourage repeat business and positive reviews.',
    icon: '/assets/mdi.svg',
  },
  {
    title: 'Leverage Marketing Tools',
    description:
      'Use platform ads, social media, and email campaigns to promote your products, drive traffic to your store, and engage with potential customers.',
    icon: '/assets/ri.svg',
  },
  {
    title: 'Analyze and Adjust',
    description:
      'Regularly review your sales data, customer feedback, and performance metrics to inform pricing strategies, marketing changes, and product offerings for continuous growth.',
    icon: '/assets/ix.svg',
  },
];

export const MajorStepsSection = () => {
  return (
    <Box py={10} bg="#E7906B1F">
      <Container maxW="container.xl">
        <Flex gap={8} flexWrap="wrap">
          <Box
            flex="1"
            minW={{ base: '100%', md: '400px' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src="/assets/grow.svg"
              alt="Business Growth"
              w="100%"
              h="auto"
            />
          </Box>

          <Box flex="1" minW={{ base: '100%', md: '400px' }} p={3}>
            <Heading
              textAlign="center"
              mb={8}
              color="navy.900"
              fontSize={['20px', '22px', '24px', '24px']}
            >
              4 MAJOR STEPS ON HOW TO GROW YOUR BUSINESS ON 3XG
            </Heading>

            <Box
              flex="1"
              minW={{ base: '100%', md: '400px' }}
              bg="white"
              borderRadius="xl"
              boxShadow="0px 0px 4px 3px rgba(0, 0, 0, 0.25)"
              p={[3, 4, 5, 5]}
            >
              {steps.map((step, index) => (
                <Flex
                  key={index}
                  gap={[4, 5, 6, 6]}
                  mb={index === steps.length - 1 ? 0 : [4, 5, 6, 6]}
                  pb={index === steps.length - 1 ? 0 : [4, 5, 6, 6]}
                  borderBottom={
                    index === steps.length - 1 ? 'none' : '1px solid'
                  }
                  borderColor="gray.100"
                >
                  <Image
                    src={step.icon}
                    alt={step.title}
                    w={
                      index === 0
                        ? '56px'
                        : index === 1
                          ? '55px'
                          : index === 2
                            ? '54px'
                            : '48px'
                    }
                    h={
                      index === 0
                        ? '56px'
                        : index === 1
                          ? '55px'
                          : index === 2
                            ? '54px'
                            : '48px'
                    }
                  />
                  <Box>
                    <Heading size="md" mb={2} color="navy.900" fontWeight="600">
                      {step.title}
                    </Heading>
                    <Text color="gray.600" fontSize="12px">
                      {step.description}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

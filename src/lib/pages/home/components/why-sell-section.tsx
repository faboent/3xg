import { Box, Container, Grid, Heading, Image, Text } from '@chakra-ui/react';

const features = [
  {
    title: 'Access to a Large Audience',
    description:
      'Gives you immediate access to a large and diverse customer base. This significantly increases your chances of reaching potential buyers without having to build your own audience from scratch',
    image: '/assets/Ellipse.svg',
  },
  {
    title: 'Secure Payment Transaction',
    description:
      'Offer users with secure, reliable payment methods that protect both the seller and the customer with fraud detection systems that help minimize risks for both parties.',
    image: '/assets/Ellipse1.svg',
  },
  {
    title: 'Lower Operating Cost',
    description:
      "As an online seller, you won't need to worry about renting physical space, covering utility bills, or hiring extensive staff, which makes significantly lower your operating expenses.",
    image: '/assets/Ellipse2.svg',
  },
  {
    title: 'Convenience and Efficiency',
    description:
      'Automated tools for inventory tracking, order processing, and shipping streamline operations, while detailed analytics provide valuable customer insights to help you understand trends, improve offerings, and make informed business decisions.',
    image: '/assets/Ellipse3.svg',
  },
  {
    title: 'Customer Reviews and Feedback',
    description:
      'Product reviews and ratings build trust, boost sales, and allow sellers to engage with customers, fostering stronger relationships and improving satisfaction.',
    image: '/assets/Ellipse4.svg',
  },
  {
    title: 'Online & Offline Sales',
    description:
      'On the 3XG merchant platform, you can sell both online and offline, reaching customers 24/7 while also offering personal interactions in-store. Its the perfect way to grow your business!',
    image: '/assets/Ellipse5.svg',
  },
  {
    title: 'Inventory Management',
    description:
      'You can easily track stock levels in real-time, manage inventory across both online and offline sales, and streamline stock updates. This helps prevent overstocking, stockouts, and ensures efficient order fulfillment.',
    image: '/assets/Ellipse6.svg',
  },
  {
    title: 'Reburst Finance & Account Module',
    description:
      'We helps you manage your financial transactions efficiently. It offers tools for tracking sales, expenses, and profits, generating reports, and maintaining accurate financial records. This simple accounting ensures transparency that will helps you make informed business decisions.',
    image: '/assets/Ellipse7.svg',
  },
  {
    title: 'Live Order Tracking',
    description:
      'We provides real-time updates on order status, from purchase to delivery. This feature enhances transparency, improves customer satisfaction, and streamlines order management.',
    image: '/assets/Ellipse8.svg',
  },
];

export const WhySellSection = () => {
  return (
    <Box py={20} bg="white">
      <Container maxW="container.xl">
        <Heading textAlign="center" mb={16} color="navy.900" fontSize="3xl">
          WHY SELL ON 3XG?
        </Heading>
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap={8}
        >
          {features.map((feature, index) => (
            <Box key={index} textAlign="center" p={6}>
              <Image
                src={feature.image}
                alt={feature.title}
                mx="auto"
                mb={4}
                w="200px"
                h="200px"
                objectFit="cover"
                borderRadius="full"
              />
              <Heading size="md" mb={3} color="navy.900">
                {feature.title}
              </Heading>
              <Text color="gray.600">{feature.description}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

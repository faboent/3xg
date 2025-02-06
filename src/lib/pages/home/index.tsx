import { Flex } from '@chakra-ui/react';
import { HeroSection } from './components/hero-section';
import { WhySellSection } from './components/why-sell-section';
import { MajorStepsSection } from './components/major-steps-section';
import { NewsletterSection } from './components/newsletter-section';

export const Home = () => {
  return (
    <Flex direction="column" w="full" minH="100vh">
      <HeroSection />
      <WhySellSection />
      <MajorStepsSection />
      <NewsletterSection />
    </Flex>
  );
};

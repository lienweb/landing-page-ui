import { Flex, Heading, Text, Box } from '@chakra-ui/react';
import Image from 'next/image';
import RocketButton from './RocketButton';

const CTASection = () => {
  return (
    <Flex
      px={{ base: 7, lg: 14 }}
      bg="yellow.100"
      w="100%"
      flexDirection={{ base: 'column' }}
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        as="h1"
        textAlign="center"
        fontSize={`2.375rem`}
        pt={{ base: 6, lg: `7.5rem` }}
      >
        Get Landing Page UI Kit Today!
      </Heading>
      <Text
        align={{ base: 'center', lg: 'left' }}
        pt={5}
        pb={10}
        fontFamily="mulish"
        fontSize={`1rem`}
      >
        Break Figma limits and explore the endless possibilities with Anima.
      </Text>
      <RocketButton title="Get Started" display={{ base: 'flex' }} />
      <Box pt={10}>
        <Image
          src="/mock-page.svg"
          width={780}
          height={582}
          alt="social media"
        />
      </Box>
    </Flex>
  );
};

export default CTASection;

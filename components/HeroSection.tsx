import {
  Box,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import Image from 'next/image';
import RocketButton from './RocketButton';

const HeroSection = () => {
  return (
    <Flex
      px={{ base: 7, lg: 14 }}
      pt={{ base: `3.75rem`, lg: `7.5rem` }}
      bg="yellow.100"
      w="100%"
      flexDirection={{ base: 'column', lg: 'row' }}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems={{ base: 'center', lg: 'flex-start' }}
        justifyContent="center"
      >
        <Heading
          as="h1"
          fontSize={`2.375rem`}
          display={{ base: 'block', md: 'none' }}
        >
          Create
        </Heading>
        <Heading
          as="h1"
          fontSize={`2.375rem`}
          display={{ base: 'block', md: 'none' }}
        >
          Engaging
        </Heading>
        <Heading
          as="h1"
          fontSize={{ base: `2.375rem`, md: '4.18rem' }}
          display={{ base: 'none', md: 'block' }}
        >
          Create Engaging
        </Heading>
        <Heading
          as="h1"
          fontSize={{ base: `2.375rem`, md: '4.18rem' }}
          noOfLines={1}
        >
          Landing Pages
        </Heading>
        <Text align={{ base: 'center', lg: 'left' }} pt={5} fontFamily="mulish">
          Build beautiful landing pages in record time with
          <span> Anima’s </span>Landing Page UI kit for Figma. No code required!
        </Text>
        <Stack direction={{ base: 'column', lg: 'row' }} pt={10} pb={`3.75rem`}>
          <RocketButton title="Get Started" display={{ base: 'flex' }} />
          <Button
            variant="outline"
            color="green.100"
            bg="white"
            _hover={{ color: 'green.50' }}
            borderRadius="2xl"
          >
            How it works
          </Button>
        </Stack>
      </Box>
      <Spacer />
      <Box alignSelf={{ lg: 'end' }}>
        <Image src="/hero-mobile.png" width={315} height={315} alt="mobile" />
      </Box>
    </Flex>
  );
};

export default HeroSection;

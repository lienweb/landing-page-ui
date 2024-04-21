import { Flex, Spacer, Button, HStack, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import RocketButton from './RocketButton';

const Navbar = () => {
  return (
    <Flex
      bg="yellow.100"
      w="100%"
      h={`6.25rem`}
      px={{ base: 5, sm: '3.125rem' }}
      color="gray.900"
    >
      <Flex alignItems="center" justifyContent="center">
        <Image
          src="/logo.png"
          width={32}
          height={32}
          className="hidden md:block"
          alt="logo"
        />
        <Text
          fontSize="xl"
          fontWeight={700}
          ml={1.5}
          display={{ base: 'none', lg: 'block' }}
        >
          Landing
        </Text>
        <Text fontSize="xl" display={{ base: 'none', lg: 'block' }}>
          Page
        </Text>
      </Flex>
      <Spacer />
      <HStack>
        <Button
          variant="ghost"
          color="green.100"
          _hover={{ color: 'green.50' }}
          display={{ base: 'none', lg: 'flex' }}
          borderRadius="2xl"
        >
          Contact
        </Button>
        <Button
          borderRadius="2xl"
          bg="green.50"
          color="green.100"
          _hover={{ color: 'green.50', bg: 'green.100' }}
          display={{ base: 'none', lg: 'flex' }}
        >
          How it works
        </Button>
        <RocketButton
          title="Get Started"
          display={{ base: 'none', lg: 'flex' }}
        />
        <Button
          rightIcon={<ArrowForwardIcon />}
          borderRadius="2xl"
          color="white"
          bg="green.100"
          _hover={{ color: 'green.100', bg: 'green.50' }}
          display={{ base: 'flex', lg: 'none' }}
        >
          Get Started
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;

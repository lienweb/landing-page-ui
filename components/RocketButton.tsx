import { Button, Text } from '@chakra-ui/react';
import Image from 'next/image';

const RocketButton = ({ title, display }) => {
  return (
    <Button
      borderRadius="2xl"
      color="white"
      bg="green.100"
      display={display}
      _hover={{ color: 'green.100', bg: 'green.50' }}
    >
      <Image
        src="/RocketLaunch.svg"
        width={16}
        height={16}
        className="hidden md:block"
        alt="Get Started"
      />
      <Text fontSize="md" ml={2}>
        {title}
      </Text>
    </Button>
  );
};
export default RocketButton;

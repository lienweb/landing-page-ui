import { Flex, IconButton, HStack, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Flex
      bg="gray.900"
      w="100%"
      h={`7.5rem`}
      px={{ base: 6, sm: '3.125rem' }}
      color="white"
      flexDirection={{ base: 'column', sm: 'row-reverse' }}
      justifyContent={{ base: 'center', sm: 'space-between' }}
      alignItems={{ sm: 'center' }}
    >
      <HStack mb={{ base: 4, sm: 0 }}>
        <IconButton
          isRound={true}
          variant="solid"
          bg={`#4E4D4D`}
          color="white"
          aria-label="Done"
          fontSize="20px"
          icon={<FaInstagram />}
        />
        <Button
          p={0}
          borderRadius="50%"
          variant="solid"
          bg={`#4E4D4D`}
          color="white"
        >
          <Image
            src="/social-media/Dribbble.svg"
            width={20}
            height={20}
            alt="dribble"
          />
        </Button>
        <IconButton
          isRound={true}
          variant="solid"
          bg={`#4E4D4D`}
          color="white"
          aria-label="Done"
          fontSize="20px"
          icon={<FaGithub />}
        />
        <IconButton
          isRound={true}
          variant="solid"
          bg={`#4E4D4D`}
          color="white"
          aria-label="Done"
          fontSize="20px"
          icon={<FaTwitter />}
        />
      </HStack>
      <Text>© {year} Anima’s Landing Page Ui Kit. </Text>
    </Flex>
  );
};
export default Footer;

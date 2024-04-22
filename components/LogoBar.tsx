import { Flex, Heading, Text, Button, Box, Grid } from '@chakra-ui/react';
import Image from 'next/image';
import { logoBarLine1, logoBarLine2, logoBarLine3 } from '@/constants';

const LogoBar = () => {
  return (
    <Flex
      px={{ base: 7, lg: 14 }}
      py={{ base: `3.75rem`, lg: `7.5rem` }}
      bg="gray.50"
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
        More than 50 Integrations
      </Heading>
      <Text
        align={{ base: 'center', lg: 'left' }}
        pt={5}
        fontFamily="mulish"
        fontSize={`1rem`}
      >
        We integrate with more than 50 apps you use daily
      </Text>
      <Flex w="full" pt={10} alignItems="center" justifyContent="space-between">
        {logoBarLine1.map((imgSrcPath, i) => (
          <Box
            borderRadius="full"
            w={{ base: '2.5rem', sm: 'full' }}
            h={{ base: '2.5rem', sm: 'full' }}
            key={i}
          >
            <Image src={imgSrcPath} width={64} height={64} alt="social media" />
          </Box>
        ))}
      </Flex>
      <Grid templateColumns="repeat(5, 1fr)" gap={{ base: 4, lg: 14 }} pt={10}>
        {logoBarLine2.map((imgSrcPath, i) => (
          <Box
            borderRadius="full"
            w={{ base: '2.5rem', sm: 'full' }}
            h={{ base: '2.5rem', sm: 'full' }}
            key={i}
          >
            <Image src={imgSrcPath} width={64} height={64} alt="social media" />
          </Box>
        ))}
      </Grid>
      <Grid templateColumns="repeat(4, 1fr)" gap={{ base: 4, lg: 14 }} pt={10}>
        {logoBarLine3.map((imgSrcPath, i) => (
          <Box
            borderRadius="full"
            w={{ base: '2.5rem', sm: 'full' }}
            h={{ base: '2.5rem', sm: 'full' }}
            key={i}
          >
            <Image src={imgSrcPath} width={64} height={64} alt="social media" />
          </Box>
        ))}
      </Grid>
      <Button
        mt={16}
        borderRadius="2xl"
        color="white"
        bg="green.100"
        _hover={{ color: 'green.100', bg: 'green.50' }}
      >
        View All Integrations
      </Button>
    </Flex>
  );
};

export default LogoBar;

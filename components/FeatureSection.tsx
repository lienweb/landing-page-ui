import { Box, Flex, Heading, Spacer, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import CustomIconButton from './CustomIconButton';
import { features } from '@/constants';

const FeatureSection = () => {
  return (
    <Flex
      px={{ base: 7, lg: 14 }}
      py={{ base: `3.75rem`, lg: `7.5rem` }}
      bg="gray.50"
      w="100%"
      flexDirection={{ base: 'column', lg: 'row-reverse' }}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems={{ base: 'center', lg: 'flex-start' }}
        justifyContent="center"
      >
        <Heading as="h1" fontSize={`2.375rem`}>
          Our features
        </Heading>
        <Text
          align={{ base: 'center', lg: 'left' }}
          pt={5}
          fontFamily="mulish"
          fontSize={`1.3rem`}
        >
          Few good reasons why you should use Anima Landing Page Ui Kit to make
          your own pages.
        </Text>
        <Stack direction={{ base: 'column', lg: 'row' }} pt={10} pb={`3.75rem`}>
          {features.map((feat) => (
            <CustomIconButton
              title={feat.title}
              imgPath={feat.imgPath}
              imgBg={feat.imgBg}
            />
          ))}
        </Stack>
      </Box>
      <Spacer />
      <Box>
        <Image
          src="/feature-mobile.png"
          width={320}
          height={267}
          alt="mobile"
        />
      </Box>
    </Flex>
  );
};

export default FeatureSection;

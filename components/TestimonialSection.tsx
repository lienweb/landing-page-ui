import {
  Flex,
  Heading,
  Stack,
  Text,
  Card,
  CardFooter,
  Avatar,
  CardHeader,
  Icon,
} from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa6';
import { testimonials } from '@/constants';

const TestimonialSection = () => {
  return (
    <Flex
      px={{ base: 7, lg: 14 }}
      py={{ base: `3.75rem`, lg: `7.5rem` }}
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
        Real Stories from Satisfied Customers
      </Heading>
      <Text
        align={{ base: 'center', lg: 'left' }}
        pt={5}
        fontFamily="mulish"
        fontSize={`1rem`}
      >
        See how our landing page ui kit is making an impact.
      </Text>
      <Stack direction={{ base: 'column', lg: 'row' }} pt={10}>
        {testimonials.map((data) => (
          <Card
            size="sm"
            borderRadius="2xl"
            m={4}
            px={8}
            py={10}
            flexDirection={{ base: 'column', sm: 'row' }}
            alignItems="center"
          >
            <CardHeader
              display="flex"
              flexDirection="column"
              alignItems="center"
              px={8}
              py={4}
            >
              <Avatar size="2xl" name="Dan Abrahmov" src={data.avatar} mb={4} />
              <Heading size="md" mb={`6px`}>
                {data.name}
              </Heading>
              <Text>{data.position}</Text>
            </CardHeader>
            <Flex flexDirection={{ base: 'column', sm: 'column-reverse' }}>
              <Text align={{ base: 'center', sm: 'start' }}>
                {data.comment}
              </Text>
              <CardFooter
                justifyContent={{ base: 'center', sm: 'flex-start' }}
                px={0}
              >
                {Array(data.ratings)
                  .fill('')
                  .map((_, i) => (
                    <Icon
                      as={FaStar}
                      color="yellow.100"
                      key={i}
                      boxSize={`1.5rem`}
                    />
                  ))}
              </CardFooter>
            </Flex>
          </Card>
        ))}
      </Stack>
    </Flex>
  );
};

export default TestimonialSection;

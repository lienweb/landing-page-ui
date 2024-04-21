import {
  Flex,
  Heading,
  Stack,
  Text,
  Card,
  Avatar,
  CardHeader,
  HStack,
  Button,
} from '@chakra-ui/react';
import { teamMemebers } from '@/constants';

const TeamSection = () => {
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
        Meet our team
      </Heading>
      <Text
        align={{ base: 'center', lg: 'left' }}
        pt={5}
        fontFamily="mulish"
        fontSize={`1rem`}
      >
        Get to know the faces behind the scenes and learn about the values that
        drive us.
      </Text>
      <Stack direction={{ base: 'column', lg: 'row' }} pt={10}>
        {teamMemebers.map((data) => (
          <Card
            size="sm"
            borderRadius="2xl"
            m={4}
            px={8}
            py={10}
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
            <Text align="center">{data.comment}</Text>
            <HStack mt={8}>
              <Button
                variant="ghost"
                color="green.100"
                _hover={{ color: 'green.50' }}
                borderRadius="2xl"
              >
                Twitter
              </Button>
              <Button
                variant="ghost"
                color="green.100"
                _hover={{ color: 'green.50' }}
                borderRadius="2xl"
              >
                Dribble
              </Button>
              <Button
                variant="ghost"
                color="green.100"
                _hover={{ color: 'green.50' }}
                borderRadius="2xl"
              >
                LinkedIn
              </Button>
            </HStack>
          </Card>
        ))}
      </Stack>
    </Flex>
  );
};

export default TeamSection;

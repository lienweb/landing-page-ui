import {
  Flex,
  Heading,
  Stack,
  Text,
  Card,
  CardBody,
  CardFooter,
  Image,
} from '@chakra-ui/react';
import { projectsImage } from '@/constants';

const ProjectSection = () => {
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
      <Heading as="h1" fontSize={`2.375rem`}>
        Selected Works
      </Heading>
      <Text
        align={{ base: 'center', lg: 'left' }}
        pt={5}
        fontFamily="mulish"
        fontSize={`1rem`}
      >
        Explore our portfolio and see the latest projects that we've brought to
        life.
      </Text>
      <Stack direction={{ base: 'column', lg: 'row' }} pt={10}>
        {projectsImage.map((image, i) => (
          <Card size="sm" borderRadius="2xl" m={4} key={i}>
            <CardBody p={0}>
              <Image src={image} borderTopRadius="2xl" alt="Dan Abramov" />
            </CardBody>
            <CardFooter px={8}>
              <Stack>
                <Heading size="md">Project title</Heading>
                <Text>Short description</Text>
                <Text>Category</Text>
              </Stack>
            </CardFooter>
          </Card>
        ))}
      </Stack>
    </Flex>
  );
};

export default ProjectSection;

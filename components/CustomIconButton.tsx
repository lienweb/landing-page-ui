import { Button, Text, Box } from '@chakra-ui/react';
import Image from 'next/image';
interface CustomIconButtonProps {
  title: string;
  imgPath: string;
  imgBg: string;
}

const CustomIconButton = ({ title, imgPath, imgBg }: CustomIconButtonProps) => {
  return (
    <Button
      borderRadius="2xl"
      variant="outline"
      color="gray.900"
      fontWeight="400"
      bg="white"
      _hover={{ color: 'green.100', bg: 'green.50' }}
    >
      <Box bg={imgBg} borderRadius="sm">
        <Image
          src={imgPath}
          width={16}
          height={16}
          className="hidden md:block"
          alt="custom button"
        />
      </Box>
      <Text fontSize="md" ml={2}>
        {title}
      </Text>
    </Button>
  );
};
export default CustomIconButton;

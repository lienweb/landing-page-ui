'use client';
import { Link } from '@chakra-ui/next-js';

export default function Home() {
  return (
    <main>
      <Link
        href="/login"
        color="blue.400"
        _hover={{ color: 'blue.500' }}
        fontSize={`90px`}
        fontWeight={`700`}
      >
        Typography
      </Link>
    </main>
  );
}

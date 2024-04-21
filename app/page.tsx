'use client';
import Image from 'next/image';
import { Link } from '@chakra-ui/next-js';

export default function Home() {
  return (
    <main>
      <Link href="/login" color="blue.400" _hover={{ color: 'blue.500' }}>
        Login
      </Link>
    </main>
  );
}

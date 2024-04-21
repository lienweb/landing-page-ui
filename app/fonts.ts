import { Poppins, Mulish } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600', '700'],
  variable: '--font-poppins',
});

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
});

export const fonts = {
  poppins,
  mulish,
};

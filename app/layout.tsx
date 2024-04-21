import type { Metadata } from 'next';
import { fonts } from './fonts';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Lanng Page V2',
  description: 'This is a demo for landing page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.poppins.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

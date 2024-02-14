import { Metadata } from 'next';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const metadata: Metadata = {
  description: 'Next.js + TypeScript Starter',
  title: 'nextjs-typescript-starter',
};

const RootLayout = ({ children }: Props) => (
  <html lang="ja">
    <head />
    <body>{children}</body>
  </html>
);

export { metadata };
export default RootLayout;

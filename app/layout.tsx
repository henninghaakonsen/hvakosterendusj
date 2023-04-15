import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hva koster en dusj?',
  description: 'Hva koster en dusj?',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

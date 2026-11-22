import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kasi Boost',
  description: 'Kasi Boost project starter',
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

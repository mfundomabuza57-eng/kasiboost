import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kasiboost',
  description: 'Your app is live and ready!',
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

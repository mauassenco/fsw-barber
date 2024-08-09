import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import Footer from './_components/Footer';
import AuthProvider from './_providers/auth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FSW Barber',
  description: 'Agende nos melhores',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <Toaster />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}

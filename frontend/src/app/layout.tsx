import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Aman Takhar — Software Engineer',
  description:
    'Personal portfolio of Aman Takhar — a software engineer specializing in full-stack web development. View projects, skills, and contact information.',
  keywords: ['Aman Takhar', 'Software Engineer', 'Portfolio', 'Full Stack Developer', 'Next.js'],
  authors: [{ name: 'Aman Takhar' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amantakhar.dev',
    siteName: "Aman Takhar's Portfolio",
    title: 'Aman Takhar — Software Engineer',
    description:
      'Personal portfolio of Aman Takhar — a software engineer specializing in full-stack web development.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aman Takhar — Software Engineer',
    description: 'Personal portfolio of Aman Takhar — software engineer.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg-primary text-text-primary">{children}</body>
    </html>
  );
}

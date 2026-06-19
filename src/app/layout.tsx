import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EMTAN Polymers | Custom Polyurethane & Industrial Solutions Chennai',
  description:
    'India\'s leading manufacturer and only B2B supplier of custom cast polyurethane (PU) products, rollers, wheels, seals, pipeline pigs, and wear-resistant solutions.',
  keywords:
    'polyurethane, PU rollers, caster wheels, PU seals, pipeline pigs, industrial wear solutions, cast polyurethane Chennai, EMTAN polymers',
  authors: [{ name: 'EMTAN Polymers' }],
  metadataBase: new URL('https://emtanpolymers.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'EMTAN Polymers | High Performance Polyurethane Solutions',
    description:
      'Custom Polyurethane (PU) Rollers, Wheels, Seals, Pipeline Pigs and Wear-Resistant Parts Manufactured For Maximum Durability and Performance in Chennai, India.',
    url: 'https://emtanpolymers.com',
    siteName: 'EMTAN Polymers',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/industrial_solutions.png',
        width: 1200,
        height: 630,
        alt: 'EMTAN Polymers - polyurethane Manufacturer Solutions',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#090d16' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col text-foreground transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}

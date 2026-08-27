import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://adelia-portfolio.vercel.app'),
  title: 'Adelia Putri Pratiwi | Data Analytics & Business Intelligence',
  description: 'Portfolio Adelia Putri Pratiwi, Information Systems Graduate focused on Data Analytics, Business Intelligence, Data Warehouse, ETL, and Web Development.',
  keywords: [
    'Adelia Putri Pratiwi',
    'Data Analytics',
    'Business Intelligence',
    'Data Warehouse',
    'ETL',
    'PostgreSQL',
    'Pentaho',
    'Tableau',
    'Power BI',
    'Mondrian OLAP',
    'Sistem Informasi',
    'UPN Veteran Jawa Timur'
  ],
  authors: [{ name: 'Adelia Putri Pratiwi' }],
  creator: 'Adelia Putri Pratiwi',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://adelia-portfolio.vercel.app',
    title: 'Adelia Putri Pratiwi | Data Analytics & Business Intelligence',
    description: 'Portfolio Adelia Putri Pratiwi, Information Systems Graduate focused on Data Analytics, Business Intelligence, Data Warehouse, ETL, and Web Development.',
    siteName: 'Adelia Putri Pratiwi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adelia Putri Pratiwi | Data Analytics & Business Intelligence',
    description: 'Portfolio Adelia Putri Pratiwi, Information Systems Graduate focused on Data Analytics, Business Intelligence, Data Warehouse, ETL, and Web Development.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-cyan-500/20 selection:text-cyan-400">
        {children}
      </body>
    </html>
  );
}


import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '../components/WhatsAppFloat';
import ToasterProvider from '@/components/ToasterProvider';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hifzan Ali | Full-Stack & AI Automation Expert',
  description: 'Expert Portfolio of Hifzan Ali: Next.js, AI Automation, LangChain, and Full-Stack Development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <head>
        <link rel="icon" href="/logo_final.png" sizes="any" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true} >
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
        <ToasterProvider />
      </body>
    </html>
  )
}

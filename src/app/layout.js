import './globals.css';
// import './(style)/style.scss';
import "./legasy.scss";

import { Inter } from 'next/font/google';
import Header from './Header';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='html'>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

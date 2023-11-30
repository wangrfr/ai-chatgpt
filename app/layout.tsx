import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>AI Explorer Hub</title>
        <meta name="description" content="Explore AI applications and models" />
        <link rel="icon" href="/favicon.ico" />
        {/* Other common head elements */}
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
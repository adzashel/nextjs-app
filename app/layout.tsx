import type { Metadata } from 'next';
import '@/app/global.css';
import { Inter } from 'next/font/google'
import Navbar from '@/app/_components/navbar';
export const metadata: Metadata = {
  title: "Nextjs App"
}

const inter = Inter({ subsets: ['latin'] })
const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html className={ inter.className }>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout;

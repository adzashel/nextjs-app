import type { Metadata } from 'next';
import  '@/app/global.css';
import Navbar from '@/app/_components/navbar';
export const metadata : Metadata = {
    title : "Nextjs App"
}
const RootLayout= ({children} : Readonly <{ children : React.ReactNode}>) => {
  return (
    <html>
        <body>
            <Navbar />
            {children}
        </body>
    </html>
  )
}

export default RootLayout;

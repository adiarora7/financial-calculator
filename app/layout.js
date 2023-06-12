import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/footer'
import Header from './components/header'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mage.',
  description: 'Financial Calculator - by Adi Arora.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className='wrapper' style={{display:"flex",
                                        flexDirection:"column",
                                        minHeight:"100vh"}}>
        <main>
          {children}
        </main>                                  
        <Footer/>
      </div>
      </body>
    </html>
  )
}

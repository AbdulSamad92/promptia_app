
import '../styles/globals.css'
import Nav from '@src/components/Nav'
import Provider from '@src/components/Provider'

export const metadata = {
  title: 'Pormptopia',
  description: 'Discover & Share AI Prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient' />          
        </div>
        <main className='app'>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

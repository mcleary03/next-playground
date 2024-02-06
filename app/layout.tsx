import 'styles/globals.css'
import NavBar from '@/components/NavBar'
import { Suspense } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next Playground Test Title',
  description: 'Next.js App Router Demo',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en' >
      <body>
        <div id='app' className='grid grid-cols-[auto,_1fr]'>
          <NavBar />
          <main className='m-10'>
            <Suspense fallback='loading...'>
              {children}
            </Suspense>
          </main>
        </div>
      </body>
    </html>
  )
}

export default RootLayout

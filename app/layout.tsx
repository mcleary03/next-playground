import 'styles/globals.css'
import NavBar from 'components/NavBar'
import { Suspense } from 'react';
import { Metadata } from 'next';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'Next Playground',
  description: 'Next.js App Router Demo',
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang='en'>
    <body className='w-svw'>
      <div className='min-w-full prose grid grid-cols-[auto_1fr]'>
        <NavBar />
        <main className='py-10 pr-10'>
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </main>
      </div>
    </body>
  </html>
)

export default RootLayout

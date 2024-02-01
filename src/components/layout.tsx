import NavBar from '@/components/NavBar'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='grid grid-cols-[auto,_1fr]'>
      <NavBar />
      <main className='m-10'>
        {children}
      </main>
    </div>
  )
}

export default Layout

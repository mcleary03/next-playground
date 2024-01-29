import NavBar from '@/components/NavBar'

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NavBar />
      <main className='m-10'>
        {children}
      </main>
    </>
  )
}

export default Layout

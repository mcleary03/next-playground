import Image from 'next/image'

const NavBar = () => {

  return (
    <nav className="px-10 py-4 mb-4 bg-slate-800">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </nav>
  )
}

export default NavBar;

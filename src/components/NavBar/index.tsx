import Image from 'next/image'

const pages = [
  {
    name: 'Button',
    href: '#button',
  },
  {
    name: 'Heading',
    href: '#heading',
  },
  {
    name: 'NavBar',
    href: '#navbar',
  },
]

const NavBar = () => {

  return (
    <nav className="sticky top-0 left-0 w-48 h-fit p-10 bg-slate-800">
      <Image
        className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <hr className='my-10' />
      <ul className="prose dark:invert prose-a:no-underline prose-li:mb4">
        {pages.map(({ name, href }) => (
          <li key={name} className="mb-4">
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar;

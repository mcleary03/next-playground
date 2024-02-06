import Image from 'next/image'
import Link from 'next/link';

const pages = [
  {
    name: 'Button',
    href: 'playground/button',
  },
  {
    name: 'Heading',
    href: 'playground/heading',
  },
  {
    name: 'NavBar',
    href: 'playground/navbar',
  },
  {
    name: 'Divider',
    href: 'playground/divider',
  },
]

const NavBar = () => {

  return (
    <nav className="sticky top-0 left-0 h-svh w-48 p-10">
      <Image
        className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <hr className='my-10' />
      <ul className="prose prose-a:no-underline prose-li:mb4">
        {pages.map(({ name, href }) => (
          <li key={name} className="mb-4">
            <Link className='text-2xl' href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar;

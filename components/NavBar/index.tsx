"use client"

import Image from 'next/image'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pages = [
  {
    name: 'Button',
    href: '/playground/button',
  },
  {
    name: 'Heading',
    href: '/playground/heading',
  },
  {
    name: 'NavBar',
    href: '/playground/navbar',
  },
  {
    name: 'Divider',
    href: '/playground/divider',
  },
]

const NavBar = () => {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 left-0 h-svh p-10 overflow-y-auto">
      <Image
        className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <hr className='my-10' />
      <ul className="prose prose-a:no-underline pl-0">
        {pages.map(({ name, href }) => (
          <li key={name} className='mb-4 list-none'>
            <Link className={`text-2xl ${pathname === href ? 'text-accent-purple-light border-l-4 border-l-accent-purple-light pl-4' : ''}`} href={href}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar;

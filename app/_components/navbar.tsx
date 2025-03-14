"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav>
        <ul>
            <li>
                <Link href="/" className={ pathname === '/' ? 'active' : ''}>Home</Link>
            </li>
            <li>
            <Link href="/project" className={ pathname === '/project' ? 'active' : ""}>Project</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;

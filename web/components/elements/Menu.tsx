import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import SheetHamburger from './SheetHamburger'


const Menu = () => {
  return (
    <main className="flex justify-between hover:cursor-pointer items-center">
      <nav className="flex max-lg:hidden">
        <ul className="flex">
            <li className="px-2 hover:text-blue-500">
              <Link href="/">Home</Link>
            </li>
            <li className="px-2 hover:text-blue-500">
              <Link href="/table">Table</Link>
            </li>
        </ul>
      </nav>
      <nav className="flex lg:hidden">
        {/* <Image
          src="/icons/hamburger.svg"
          width={25} 
          height={25}
          alt="Hamburger menu icon"
          className="dark:invert"
        /> */}
        <SheetHamburger />
      </nav>
    </main>
  )
}

export default Menu
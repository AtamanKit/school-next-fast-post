import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import SheetHamburger from './SheetHamburger'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDownIcon } from "@radix-ui/react-icons"


const Menu = () => {
  return (
    <main className="flex justify-between hover:cursor-pointer items-center">
      <nav className="flex max-lg:hidden">
        <ul className="flex space-x-2">
            <li className="hover:text-blue-500">
              {/* <Link href="/">Home</Link> */}
              <Button variant="outline">
                <Link href="/">Home</Link>
              </Button>
            </li>
            <li className="hover:text-blue-500">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                    {/* <Link href="/table">Table</Link> */}
                    Table
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link href="/table/show">Show Table</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/table/create">New Employee</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
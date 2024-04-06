"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "@radix-ui/react-icons"


import Image from "next/image";
import Link from "next/link";


export default function SheetHamburger() {
  return (
    <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <Image
                className="dark:invert" 
                src="/icons/hamburger.svg"
                width={25}
                height={25}
                alt="Hamburger menu icon"
              />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>App Menu</SheetTitle>
            </SheetHeader>
            <div className="border-[1px] border-slate-300 mt-2 mb-4"/>
            <ul className="ml-3 font-light flex-row">
              <li className="hover:text-blue-500">
                <SheetClose asChild>
                  <Button variant="outline" className="w-full flex">
                    <Link href="/">Home</Link>
                    <div className="ml-2 h-4 w-4" />
                  </Button>
                </SheetClose>
              </li>
              <li className="hover:text-blue-500">
                <SheetClose asChild>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full ml-auto text-left">
                        <Link href="/table">Table</Link>
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
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
    </div>
  )
}

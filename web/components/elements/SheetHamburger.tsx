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
            <ul className="ml-3 font-light flex-row gap-">
              <li className="hover:text-blue-500">
                <SheetClose asChild>
                  <Link href="/">Home</Link>
                </SheetClose>
              </li>
              <li className="hover:text-blue-500">
                <SheetClose asChild>
                  <Link href="/table">Table</Link>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
    </div>
  )
}

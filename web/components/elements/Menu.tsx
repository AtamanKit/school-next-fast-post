import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <ul className="flex justify-between hover:cursor-pointer">
        <li className="px-2 hover:text-blue-500">
          <Link href="/">Home</Link>
        </li>
        <li className="px-2 hover:text-blue-500">
          <Link href="/table">Table</Link>
        </li>
    </ul>
  )
}

export default Menu
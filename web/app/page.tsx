"use client"

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  })

  return (
    <main className="flex dark:bg-slate-800 h-screen justify-center items-center">
      <h1 className="text-4xl font-sans font-bold dark:bg-slate-300">Hello World!</h1>
    </main>
  )
}
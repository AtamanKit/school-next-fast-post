"use client"

import { useEffect, useState } from "react"
import { Switch } from "../ui/switch"
import { Label } from "../ui/label"

const SwitchDark = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode])
    
    return (
      <main>
        <ul className="flex gap-2">
          <li>
            <Label className="text-slate-500 dark:text-slate-300">
                {darkMode ? "Dark Mode" : "Light Mode"}
            </Label>
          </li>
          <li>
            <Switch
                className="data-[state=checked]:bg-slate-300 data-[state=unchecked]:bg-slate-600"
                onClick={() => setDarkMode(!darkMode)}
            />
          </li>
        </ul>
      </main>
    )
}

export default SwitchDark
"use client"

import { useState, useEffect } from "react"

import { Switch } from "../ui/switch"
import { Label } from "../ui/label"

import { useTheme } from "../../context/themeContext"


const SwitchDark = () => {

    // useEffect(() => {
    //     if (darkMode) {
    //         document.documentElement.classList.add("dark");
    //     } else {
    //         document.documentElement.classList.remove("dark");
    //     }
    // }, [darkMode])
    const { theme, toggleTheme } = useTheme();

    // console.log("swColorValue: ", swColor)
    
    return (
      <main>
        {/* <ul className="flex gap-2">
          <li>
            <Label className="text-slate-500 dark:text-slate-300">
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </Label>
          </li>
          <li>
            <Switch
                className={`${theme === "dark" ? "data-[state=checked]:bg-slate-300" : "data-[state=unchecked]:bg-slate-600"}`}
                onClick={toggleTheme}
            />
          </li>
        </ul> */}
        <div className="bg-slate-500 text-slate-200 rounded-xl px-5 py-2 dark:bg-orange-700 hover:bg-slate-400 active:ring-orange-400 hover:ring-2 dark:hover:bg-orange-600">
          <button
            onClick={toggleTheme}
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </main>
    )
}

export default SwitchDark
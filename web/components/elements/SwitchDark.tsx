"use client"

import { useTheme } from "../../context/themeContext"


const SwitchDark = () => {

    const { theme, toggleTheme } = useTheme();

    return (
      <main>
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
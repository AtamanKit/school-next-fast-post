import Menu from "../elements/Menu"
import SwitchDark from "../elements/SwitchDark"

const Navbar = () => {
  return (
    <section className="flex border-b-2 border-slate-300 justify-center">
      <div className="flex py-5 px-7 justify-center text-slate-600 dark:text-slate-200">
        <Menu />
      </div>
      <div className="flex p-5">
        <SwitchDark />
      </div>
    </section>
  )
}

export default Navbar
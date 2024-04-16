import Menu from "../elements/Menu"
import SwitchDark from "../elements/SwitchDark"
import Login from "../elements/Login"

const Navbar = () => {
  return (
    <main className="flex justify-between border-b-2 border-slate-300 ">
      <section className="flex">
        <div className="flex py-5 px-7 justify-center text-slate-600 dark:text-slate-200">
          <Menu />
        </div>
      </section>
      <section className="flex">
        <div className="flex py-5 px-7 text-slate-600 dark:text-slate-200">
          <Login />
        </div>
        <div className="flex p-5">
          <SwitchDark />
        </div>
      </section>
    </main>
  )
}

export default Navbar
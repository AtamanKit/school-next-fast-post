import SwitchDark from "../elements/SwitchDark"

const Navbar = () => {
  return (
    <section className="flex border-b-2 border-slate-300 bg-slate-7">
      <div className="flex  p-5 w-5/6 justify-end">
        <SwitchDark />
      </div>
    </section>
  )
}

export default Navbar
import BrHome from "@/components/shared/Breadcrumbs/BrHome"

export default function Page() {

  return (
    <main>
      <div className="p-5">
        <BrHome />
      </div>
      <div className="flex h-screen justify-center items-center">
        <h1 className="text-4xl font-sans font-bold ">Hello World!</h1>
      </div>
    </main>
  )
}

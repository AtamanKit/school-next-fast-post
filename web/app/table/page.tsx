import BrTable from "@/components/shared/Breadcrumbs/BrTable"
import DataTable from "@/components/elements/DataTable"

import { EmployeeProps } from "@/types"


async function getData() {
    const res = await fetch('http://localhost:8000/api/employees/')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

getData()

export default async function Page() {
    const data: EmployeeProps[] = await getData()
    console.log(data)

    return (
        <main>
            <div className="p-5">
                <BrTable />
            </div>
            <div>
                <DataTable />
            </div>
        </main>
    )
}

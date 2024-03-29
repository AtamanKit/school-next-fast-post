import BrTable from "@/components/shared/Breadcrumbs/BrTable"
import DataTable from "@/components/elements/DataTable"

import { EmployeeProps } from "@/types"


async function getData() {
    const res = await fetch('http://api:8000/api/employees/')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}


export default async function Page() {
    const employeeData: EmployeeProps[] = await getData()

    return (
        <main>
            <div className="p-5">
                <BrTable />
            </div>
            <div>
                <DataTable
                    data={employeeData}
                />
            </div>
        </main>
    )
}

import BrTableShow from "@/components/shared/Breadcrumbs/BrTableShow"
import DataTable from "@/components/elements/DataTable"
import TableForm from "@/components/elements/TableForm"

import { EmployeeProps } from "@/types"


async function getData() {
    const res = await fetch('http://api:8000/api/employees/?skip=0&limit=10000')

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
                <BrTableShow />
            </div>
            <div>
                <DataTable
                    data={employeeData}
                />
            </div>
        </main>
    )
}

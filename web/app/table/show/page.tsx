import BrTableShow from "@/components/shared/Breadcrumbs/BrTableShow"
import DataTable from "@/components/elements/DataTable"


export default async function Page() {
    return (
        <main>
            <div className="p-5">
                <BrTableShow />
            </div>
            <div>
                <DataTable />
            </div>
        </main>
    )
}

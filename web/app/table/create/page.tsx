import TableForm from '@/components/elements/TableForm'
import BrTableCreate from '@/components/shared/Breadcrumbs/BrTableCreate'


export default function Page() {
    return (
        <main>
            <div className="p-5">
                <BrTableCreate />
            </div>
            <div>
                <TableForm/>
            </div>
        </main>
    )
}
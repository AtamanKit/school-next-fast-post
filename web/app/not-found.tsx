export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen flex-col">
            <div className="flex">
                <h1 className="text-4xl font-bold text-slate-600">404: Not Found</h1>
            </div>
            <div className="flex">
                <p>Could not find request resource</p>
            </div>
        </div>
    )
}
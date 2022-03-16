type Props = {};

const DashboardPage = (props: Props) => {
    return (
        <div>
            <header className="flex justify-between items-center px-3 py-2 bg-white shadow-sm">
                <h2 className="text-sm">Dashboard</h2>

                <button type="submit" className="inline-flex justify-center py-1 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
                </button>
            </header>

            <main className="p-3"></main>
        </div>
    )
}

export default DashboardPage;
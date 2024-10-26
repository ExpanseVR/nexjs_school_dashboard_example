const Announcements = () => {
    return (
        <div className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Announcements</h1>
                <span className="text-sm text-gray-400">See all</span>
            </div>
            <div className="flex flex-col gap-4 mt-4">
                <div className="bg-lamaSky rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Announcement 1</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-30</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Curabitur quis purus ut libero ultrices vehicula. 
                    </p>
                </div>
                <div className="bg-lamaPurpleLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Announcement 1</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-30</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Curabitur quis purus ut libero ultrices vehicula. 
                    </p>
                </div>
                <div className="bg-lamaYellowLight rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="font-medium">Announcement 1</h2>
                        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-30</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Curabitur quis purus ut libero ultrices vehicula. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Announcements;
import Image from 'next/image';

const ProfileCard = () => {
    return (
        <div className="max-w-xs w-full bg-white rounded-lg shadow-lg p-6 text-center">
            <Image
                src="https://via.placeholder.com/80"
                alt="Profile Picture"
                width={80}
                height={80}
                className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-sm text-gray-600">Shop Owner</p>
            <p className="text-xs text-gray-500 my-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="flex justify-between mt-4">
                <div className="text-center">
                    <span className="text-lg font-semibold text-gray-800">$500</span>
                    <p className="text-sm text-gray-500">Total Sales</p>
                </div>
                <div className="text-center">
                    <span className="text-lg font-semibold text-gray-800">120</span>
                    <p className="text-sm text-gray-500">Items Sold</p>
                </div>
            </div>

            <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                View Profile
            </button>
        </div>
    );
};

export default ProfileCard;

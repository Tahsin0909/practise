"use client"
import Image from 'next/image';
import { useState } from 'react';
import { Edit2, ShoppingBag, DollarSign } from 'lucide-react';

const ProfileCard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [bio, setBio] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

    return (
        <div className="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600">
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
                    <Image
                        src="https://via.placeholder.com/100"
                        alt="Profile Picture"
                        width={100}
                        height={100}
                        className="rounded-full border-4 border-white"
                    />
                </div>
            </div>
            <div className="pt-12 pb-6 px-6">
                <h2 className="text-2xl font-bold text-gray-800 text-center">John Doe</h2>
                <p className="text-sm text-gray-600 text-center mt-1">Shop Owner</p>

                {isEditing ? (
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full mt-4 p-2 text-sm text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows={3}
                    />
                ) : (
                    <p className="text-sm text-gray-700 text-center mt-4">{bio}</p>
                )}

                <div className="flex justify-between mt-6">
                    <div className="text-center flex items-center">
                        <DollarSign className="text-green-500 mr-2" size={20} />
                        <div>
                            <span className="text-lg font-bold text-gray-800">$500</span>
                            <p className="text-xs text-gray-500">Total Sales</p>
                        </div>
                    </div>
                    <div className="text-center flex items-center">
                        <ShoppingBag className="text-blue-500 mr-2" size={20} />
                        <div>
                            <span className="text-lg font-bold text-gray-800">120</span>
                            <p className="text-xs text-gray-500">Items Sold</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6 pb-6 flex space-x-2">
                <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors duration-300 flex items-center justify-center"
                >
                    <Edit2 size={18} className="mr-2" />
                    {isEditing ? 'Save Profile' : 'Edit Profile'}
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;

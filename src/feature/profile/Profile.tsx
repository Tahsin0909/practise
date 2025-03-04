"use client"
import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff, Save, UserCircle } from 'lucide-react';

const Profile = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [passwordError, setPasswordError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error messages when user starts typing again
        if (name === 'newPassword' || name === 'confirmPassword') {
            setPasswordError('');
        }
    };

    const handleProfileUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically make an API call to update the profile
        setSuccessMessage('Profile updated successfully!');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    const handlePasswordChange = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (formData.newPassword.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
            return;
        }

        if (formData.newPassword !== formData.confirmPassword) {
            setPasswordError('Passwords do not match');
            return;
        }

        // Here you would typically make an API call to change the password
        setSuccessMessage('Password changed successfully!');
        setFormData({
            ...formData,
            currentPassword: '',
            newPassword: '',
            confirmPassword: ''
        });
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="">
            <div className="">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Profile</h1>

                <div className="bg-white rounded-lg shadow-lg">
                    <div className="md:flex items-start justify-center">
                        {/* Profile Image Section */}
                        <div className=" bg-gray-100 p-8 flex flex-col items-center justify-center border-r border-gray-200">
                            <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                                <UserCircle size={120} className="text-gray-400" />
                            </div>
                            <p className="text-sm text-gray-500 text-center mt-2">
                                Profile picture placeholder<br />
                                (Upload functionality coming soon)
                            </p>
                        </div>

                        {/* Profile Details Section */}
                        <div className="p-8">
                            {successMessage && (
                                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
                                    {successMessage}
                                </div>
                            )}

                            <form onSubmit={handleProfileUpdate} className=''>
                                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                                    <User size={20} className="mr-2" />
                                    Personal Information
                                </h2>

                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none md:min-w-[300px] min-w-[250px] lg:min-w-[500px]  focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none md:min-w-[300px] min-w-[250px] lg:min-w-[500px]  focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 bg-primary/90 text-white rounded-md hover:bg-primary focus:outline-none  focus:ring-2 focus:ring-blue-500 transition-colors"
                                >
                                    <Save size={18} className="mr-2" />
                                    Save Changes
                                </button>
                            </form>

                            <hr className="my-8" />

                            <form onSubmit={handlePasswordChange}>
                                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                                    <Lock size={20} className="mr-2" />
                                    Change Password
                                </h2>

                                {passwordError && (
                                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                                        {passwordError}
                                    </div>
                                )}

                                <div className="mb-4">
                                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                        Current Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id="currentPassword"
                                            name="currentPassword"
                                            value={formData.currentPassword}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none md:min-w-[300px] min-w-[250px] lg:min-w-[500px]  focus:ring-2 focus:ring-blue-500 pr-10"
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                        New Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            id="newPassword"
                                            name="newPassword"
                                            value={formData.newPassword}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none md:min-w-[300px] min-w-[250px] lg:min-w-[500px]  focus:ring-2 focus:ring-blue-500 pr-10"
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                        >
                                            {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                        Confirm New Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none md:min-w-[300px] min-w-[250px] lg:min-w-[500px]  focus:ring-2 focus:ring-blue-500 pr-10"
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 bg-primary/90 text-white rounded-md hover:bg-primary focus:outline-none  focus:ring-2 focus:ring-blue-500 transition-colors"
                                >
                                    <Lock size={18} className="mr-2" />
                                    Update Password
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
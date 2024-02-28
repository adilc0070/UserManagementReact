import React from 'react'

function UserProfile() {
    return (

        <>
            <div className="container mx-auto py-8">
                <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src="https://via.placeholder.com/150" alt="User Profile Image" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">User Profile</div>
                            <h2 className="text-lg font-semibold mt-1">John Doe</h2>
                            <div className="mt-2">
                                <div className="text-gray-600">Email: </div>
                                <div className="text-gray-600">Location: </div>
                                <div className="text-gray-600">Joined: </div>
                            </div>
                            <div className="mt-4">
                                <a href="#" className="text-indigo-600 hover:text-indigo-700">Edit Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default UserProfile

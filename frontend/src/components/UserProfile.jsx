import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutDetails } from '../store/slice/slice'

function UserProfile() {
    let userData=useSelector((state)=>state.user)
    let dispatch=useDispatch()
    let logOut=async()=>{
        dispatch(logoutDetails())
        navigate("/register")
    }
    let navigate=useNavigate()
    return (

        <>
            
            <div className="container mx-auto py-8">
                <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0">
                            <img className="h-48 w-full object-cover md:w-48" src={userData?.image} alt="User Profile Image" />
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Your Profile</div>
                            <h2 className="text-lg font-semibold mt-1">{userData?.name}</h2>
                            <div className="mt-2">
                                <div className="text-gray-600">Id: {userData?.id.slice(0,5)} </div>
                                <div className="text-gray-600">Email: {userData?.email}</div>
                                <div className="text-gray-600">Phone: {userData?.phone}</div>
                            </div>
                            <div className="mt-4 flex justify-between ">
                                <button className="text-indigo-600 hover:text-indigo-700" onClick={()=>{navigate("/editProfile")}} >Edit Profile</button>
                                <button className="text-red-600 hover:text-red-700" onClick={()=>{logOut()}}> Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default UserProfile

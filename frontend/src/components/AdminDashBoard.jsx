import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Users } from '../api/axios';

function AdminDashBoard() {
    let navigate = useNavigate()
    let [users, setUsers] = useState([])
    let [search, setSearch] = useState("")
    let [filter, setFilter] = useState([])

    useEffect(() => {
        Users().then((data) => {
            if (data) {
                setUsers(data.result)
                setFilter(data.result)
            }
        })
    }, [])


    return (
        <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">

            <div className="flex justify-between  flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 px-4 pt-4 bg-white dark:bg-gray-900">
                <div className='w-1/3 flex justify-between '>
                    <button className=" inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-blue-500 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        Add User
                    </button>
                </div>
                <div>
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                    </div>
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" className="px-6 py-3 text-center" colSpan={2}>
                            Actions
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src={user?.profile} alt="Jese image" />
                                <div className="ps-3">
                                    <div className="text-base font-semibold">{user?.name}</div>
                                    <div className="font-normal text-gray-500">{user?.email}</div>
                                </div>
                            </td>
                            <td className="px-6 py-4">{user?.phone}</td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete User</a>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );

}

export default AdminDashBoard

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserDetails } from '../store/slice/slice';
import { EditProfileApi } from '../api/axios';

function HomePage() {
    let dispatch = useDispatch()
    let userData = useSelector((state) => state.user)
    let [error, setError] = useState('');
    let [name, setName] = useState(userData?.name)
    let [email, setEmail] = useState(userData?.email)
    let [phone, setPhone] = useState(userData?.phone)
    let [password, setPassword] = useState('')
    const [selectedImage, setSelectedImage] = useState(userData?.image);
    const [image, setImage] = useState('');
    let navigate = useNavigate()
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(event.target.files[0])
            setSelectedImage(URL.createObjectURL(file));
        }
    };
    let validateEmail = (email) => {
        const pattern = /^[a-zA-Z0-9._]+@(?:[a-zA-Z0-9-]+\.)+(com|org|net|edu)$/i;
        return pattern.test(email);
    }
    let editProfile = async (e) => {

        e.preventDefault();
        if (name.trim() === "" || name.length < 3 || name.length > 30) {
            setError("invalid name");
            return
        }
        else if (!validateEmail(email)) {
            setError("invalid email");
            return
        } else if (phone.trim() === "" || phone.length < 10) {
            setError("invalid phone number");
            return
        } else setError("");
        console.log("name,email,phone,image,password", name, email, phone, image, password);

        await EditProfileApi({ data: { name, email, phone, password,image } }).then((res) => {
            if (res.success) {
                alert(res.message)
                console.log("res", res);
                dispatch(setUserDetails({ email: res.result.email, password: res.result.password, name: res.result.name, phone: res.result.phone }))
                navigate('/user')
            } else {
                alert(res.message)
            }
        }).catch((err) => {
            console.log(err);
        })

    }
    return (
        <>
            <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl font-bold text-white capitalize dark:text-white">Account settings</h1>

                <form onSubmit={editProfile}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        {error.length > 0 &&
                            <div>
                                <label className="text-white dark:text-gray-200" htmlFor="username">{error}</label>
                            </div>
                        }
                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="username">Username</label>
                            <input id="username" value={name} type="text" onChange={(e) => { setName(e.target.value) }} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="emailAddress">Email Address</label>
                            <input id="emailAddress" value={email} type="email" onChange={(e) => { setEmail(e.target.value) }} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="password">Password <sup className='text-red-500'>new</sup></label>
                            <input id="password" value={password} type="password" onChange={(e) => { setPassword(e.target.value) }} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Phone</label>
                            <input id="Phone" value={phone} type="number" min={0} max={9999999999} onChange={(e) => { setPhone(e.target.value) }} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Image</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                {selectedImage ? (
                                    <>

                                        <div className="space-y-1 text-center">
                                            <img src={selectedImage} alt="Selected" className="h-32 w-auto mx-auto" />
                                            <div className="flex text-sm text-gray-600">
                                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span className="">Upload a file</span>
                                                    <input id='file-upload' name="image" type="file" className="sr-only" onChange={handleFileChange} />
                                                </label>
                                                <p className="pl-1 text-white">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </>
 
                                ) : (
                                    <>
                                        <div className="space-y-1 text-center">
                                            <img src={`../../public/${userData.image}`} alt="Selected" className="h-32 w-auto mx-auto" />

                                            <div className="flex text-sm text-gray-600">
                                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span className="">Upload a file</span>
                                                    <input id="file-upload" name="image" type="file" className="sr-only" onChange={handleFileChange} />
                                                </label>
                                                <p className="pl-1 text-white">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-around mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-slate-500 rounded-md hover:bg-slate-700 focus:outline-none focus:bg-gray-600" onClick={() => { navigate('/user') }} >cancel</button>
                        <button type='submit' className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>

        </>
    )
}

export default HomePage

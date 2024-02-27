import React, { useState } from 'react'



function SignInPage() {
    const [activePage, setActivePage] = useState('signUp');
    let [email, setEmail] = useState('');
    let [name, setName] = useState('');
    let [password, setPassword] = useState('');
    let [admin, setAdmin] = useState(0);
    let [error, setError] = useState('');
    let [phone, setPhone] = useState('');
    console.log(admin);
    let signUp = async (e) => {

        e.preventDefault();
        function validateEmail(email) {
            const pattern = /^[a-zA-Z0-9._]+@(?:[a-zA-Z0-9-]+\.)+(com|org|net|edu)$/i;
            return pattern.test(email);
        }
        if (name.trim() === "" || name.length < 3 || name.length > 30) {
            setError("invalid name");
            return;
        }
        if (!validateEmail(email)) {
            setError("invalid email");
            return;
        } else if (password.trim() === "" || password.length < 8) {
            setError("password should be atleast 8 characters long");
            return;
        } else if (phone.trim() === "" || phone.length < 10) {
            setError("invalid phone number");
        } else setError("");
        console.log('im here in sign up datas are valid:', email, password, name, phone, admin);
    }
    let signIn=async (e)=>{
        e.preventDefault();
        function validateEmail(email) {
            const pattern = /^[a-zA-Z0-9._]+@(?:[a-zA-Z0-9-]+\.)+(com|org|net|edu)$/i;
            return pattern.test(email);
        }
        if(!validateEmail(email)){
            setError("invalid email");
            return;
        }else if(password.trim() === "" || password.length < 8){
            setError("password should be atleast 8 characters long");
            return;
        }else setError("");
        console.log('im here in sign in datas are valid:', email, password);

    }
    let adminLogin = async (e) => {
        e.preventDefault();
        function validateEmail(email) {
            const pattern = /^[a-zA-Z0-9._]+@(?:[a-zA-Z0-9-]+\.)+(com|org|net|edu)$/i;
            return pattern.test(email);
        }
        if (!validateEmail(email)) {
            setError("invalid email");
            return;
        }else if(password.trim() === "" || password.length < 5){
            setError("password should be atleast 5 characters long");
        }else setError("");
        console.log('im here in admin sign in datas are valid:', email, password);
    }
    return (
        <>
            {activePage === 'signUp' &&
                <section className="bg-gray-800 h-screen">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Sign Up
                                </h1>
                                {error.length > 0 &&
                                    <div id="alert-1" className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                        <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                        </svg>
                                        <span className="sr-only">Info</span>
                                        <div className="ms-3 text-sm font-medium">
                                            {error}
                                        </div>
                                        <button type="button" onClick={() => setError('')} className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
                                            <span className="sr-only">Close</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                        </button>
                                    </div>
                                }
                                <form className="space-y-4 md:space-y-6" onSubmit={signUp}>


                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                        <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} className="bg-gray-500 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="bg-gray-500 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} className="bg-gray-500 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                                        <input type="number" min={0} max={9999999999} name="phone" id="phone" placeholder="Enter your phone number" onChange={(e) => setPhone(e.target.value)} className="bg-gray-500 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <div className="flex items-start" >
                                        <div className="flex items-center h-5" onClick={() =>{ setAdmin(admin? 0 : 1), console.log(admin)} } >
                                            <input name='isAdmin'  id="terms" aria-describedby="terms" type="checkbox" value={true} className="w-4 h-4 border border-gray-300 rounded bg-gray-500 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="terms"  className="font-light text-gray-500 dark:text-gray-300">Admin</label>
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full border border-slate-500 hover:border-slate-200 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                                    <p className="cursor-none text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account? <a onClick={() => { setActivePage('signIn') }} className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            }
            {activePage === 'signIn' &&
                <section className="bg-gray-800 h-screen">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Login
                                </h1>
                                {error.length > 0 &&
                                    <div id="alert-1" className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                        <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                        </svg>
                                        <span className="sr-only">Info</span>
                                        <div className="ms-3 text-sm font-medium">
                                            {error}
                                        </div>
                                        <button type="button" onClick={() => setError('')} className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
                                            <span className="sr-only">Close</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                        </button>
                                    </div>
                                }
                                <form className="space-y-4 md:space-y-6" onSubmit={signIn}>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" onChange={(e) => { setEmail(e.target.value) }} className="bg-gray-500 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="••••••••" className="bg-gray-500 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                    <button type="submit" className="w-full border border-slate-500 hover:border-slate-200 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                                    <p className="cursor-none text-sm font-light text-gray-500 dark:text-gray-400">
                                        Create an account? <a onClick={() => { setActivePage('signUp') }} className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up here</a>
                                    </p>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 cursor-pointer" onClick={() => { setActivePage('adminLogin') }}>Admin Login</p>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            }{activePage === 'adminLogin' &&
                <section className="bg-gray-800 h-screen">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Admin Login
                                </h1>
                                {error.length > 0 &&
                                    <div id="alert-1" className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                                        <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                                        </svg>
                                        <span className="sr-only">Info</span>
                                        <div className="ms-3 text-sm font-medium">
                                            {error}
                                        </div>
                                        <button type="button" onClick={() => setError('')} className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
                                            <span className="sr-only">Close</span>
                                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                            </svg>
                                        </button>
                                    </div>
                                }
                                <form className="space-y-4 md:space-y-6" onSubmit={adminLogin}>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                        <input type="email" name="email" id="email" onChange={(e) => { setEmail(e.target.value) }} className="bg-gray-500 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                        <input type="password" name="password" id="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="••••••••" className="bg-gray-500 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <button type="submit" className="w-full border border-slate-500 hover:border-slate-200 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                                    <p className="cursor-none text-sm font-light text-gray-500 dark:text-gray-400">
                                        I'm not an administrator. <a onClick={() => { setActivePage('signUp') }} className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">Back to Sign Up</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    );
};


export default SignInPage

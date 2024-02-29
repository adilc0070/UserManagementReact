import axios from "axios"

let api = axios.create({
    baseURL: 'http://localhost:8080'
})

export let LogInApi = async ({data}) => {
    let a=await api.post('/user/logIn', data)
    return a.data
}

export let Users=async ()=>{
    let a=await api.get('/admin/usersList')
    console.log("usersList",a.data);
    return a.data
}
export let SignUpApi=async ({data})=>{
    let a=await api.post('/user/signUp', data)
    return a.data
}

export let adminSignInApi=async ({data})=>{
    let a=await api.post('/admin/login', data)
    console.log("adminLogin",a.data);
    return a.data
}
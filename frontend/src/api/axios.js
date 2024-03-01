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
    return a.data
}
export let SignUpApi=async ({data})=>{
    let a=await api.post('/user/signUp', data)
    return a.data
}

export let adminSignInApi=async ({data})=>{
    let a=await api.post('/admin/login', data)
    return a.data
}
export let AddUserApi=async ({data})=>{
    console.log("data:",data);
    let a=await api.post('/admin/addUser', data)
    console.log("AddUserApi",a.data);
    return a.data
}
export let EditProfileApi=async ({data})=>{
    let fromData=new FormData()
    fromData.append('name',data.name)
    fromData.append('email',data.email)
    fromData.append('phone',data.phone)
    fromData.append('password',data.password)
    fromData.append('image',data.image)

    const config = {
        header: {
          "content-type": "multipart/form-data",
        },
        withCredentials: true,
    };
    console.log("data:",data);
    let a=await api.post('/user/editProfile', fromData,config)
    return a.data
}
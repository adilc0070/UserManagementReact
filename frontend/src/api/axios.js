import axios from "axios"

let api = axios.create({
    baseURL: 'http://localhost:8080'
})

export let LogInApi = async ({data}) => {
    console.log("data from api: ",data);
    let a=await api.post('/user/logIn', data)
    console.log("a",a);
    return a.data
}
export let sampleApi = () => {
    api.post('/sample').then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err)
    })
}
export let SignUpApi=async ({data})=>{
    let a=await api.post('/user/signUp', data)
    console.log("a",a);
    return a.data
}
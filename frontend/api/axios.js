import axios from "axios"

export let sample = () => {
    axios.get('http://localhost:8080').then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err)
    })
}
export let signUp=()=>{
    axios.post('http://localhost:8080/user/signUp').then((res)=>{
        console.log(res.data);
    }).catch((err)=>{
        console.log(err);
    })
}
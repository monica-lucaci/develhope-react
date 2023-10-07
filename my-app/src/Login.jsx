import { useState } from "react";

const CreateFormData = () => {return {
    username: '',
    password: '',
    remember: '',
} };


const Login = () => {
    const[data,setData] = useState(CreateFormData)

 

  

    const handleInputChange = (event) => {
        const name =event.target.name;
        const value =event.target.value;
        const checked =event.target.checked;
        const type =event.target.type;
        setData((data) =>{
            return {
                ...data,
                [name]: type ===' checkbox' ? checked : value,
            }
        } )
    }

    return (
        <form>
        <input value={data.username} name="username" onInput={handleInputChange} placeholder="username"/>
        <input value={data.password} type="password" name="password" onInput={handleInputChange} placeholder="password"/>
        <input checked={data.remember} type="checkbox" name="remember" onChange={handleInputChange} />
        <label htmlFor="remember">Remember me!</label>
       
        </form>
    )
}

export default Login;
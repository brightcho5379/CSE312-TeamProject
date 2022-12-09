import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import axios from 'axios'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(username, password);

        try {
            const config = {
                headers: {
                    "Content-type":"application/json"
                }
            }
            setLoading(true);
            const {data} = await axios.post('http://localhost:8080/user/login', {
                username,
                password,
            },
            config
            );
            console.log(data);
            localStorage.setItem('userInfo', JSON.stringify(data));
            setLoading(false);
        } catch (error) {
            setError(error.response.data.message);
        }
    }
    // const [user, setUser] = useState({
    //     email:'', password: ''
    // })

    // const onChangeInput = e =>{
    //     const {name, value} = e.target;
    //     setUser({...user, [name]:value})
    // }

    // const loginSubmit = async e =>{
    //     e.preventDefault()
    //     try {
    //         await axios.post('/user/login', {...user})
    //         window.location.href = "/";
    //     } catch (err) {
    //         alert(err.response.data.msg)
    //     }
    // }

    return (
        <div className="login-page">
            <form onSubmit={submitHandler}>
                <h2>Login</h2>
                <input type="username" name="username" required
                placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br/>
                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <div className="Login-Button">
                    <button type="submit">Login</button>
                    <label>Don't have an account? <Link to="/register">Register</Link></label>
                </div>
            </form>
        </div>
    )
}

export default Login;
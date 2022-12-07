import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import axios from 'axios'

const Login = () => {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />
                <br/>
                <input type="password" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <div className="Login-Button">
                    <button type="submit">Login</button>
                    <label>Don't have an account? <Link to="/register">Register</Link></label>
                </div>
            </form>
        </div>
    )
}

export default Login;
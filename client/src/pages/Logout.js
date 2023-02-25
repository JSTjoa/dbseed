import React, {useState} from 'react';
import '../../App.css';
import LoginForm from './LoginForm';

export default function SignUp() {

    const adminUser = {
        userId: "admin",
        password: "admin123"
    }

    const [user, setUser] = useState({name: "", userId: ""})
    const [error,setError] = useState("")

    const Login = details => {
        console.log(details);

        if (details.userId == adminUser.userId && details.password == adminUser.password) {
            console.log("Logged in");
            setUser({
                userId: details.userId
            })
        } else {
            console.log("Details do not match!")
            setError("Details do not match!")
        }
    }

    const Logout = () => {
        setUser({name: "", userId: ""})
    }
    return (
        <div className = "App">
            {(user.userId != "") ? (
                <div className='welcome'> 
                    <h1>You have been logged out successfully. <span>{user.userId}</span></h1>
                </div>
        ) : (
            <LoginForm Login={Login} error={error} />
    )}
        </div>
    );
    }
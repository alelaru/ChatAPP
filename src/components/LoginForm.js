import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        const authObjct = { 
            'Project-ID': "2619f599-6531-4b7e-8ac9-9942bfca67d8",
            'User-Name': username,
            'User-Secret': password
        }

        axios.get("https://api.chatengine.io/users/me/", { headers: authObjct })
        .then(response =>  {            
            console.log(response);
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            window.location.reload();
            }
        ).catch(error => {
            setError("Wrong credentials, try to check the correct values");
        })
        
    }

    return ( <div className="wrapper">

        <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required></input>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required></input>
                <div align="center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
            </form>
        </div>
    </div> );
}
 
export default LoginForm;
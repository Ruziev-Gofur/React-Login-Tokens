import { Axios } from "axios";
import { useState } from "react";
import {Navigate} from "react-router-dom";

export const Login = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async e =>{
        e.preventDefault();

        // Axiosga berilgan URL xato
        const {data} = await Axios.post("http://localhost:3000/api/login", {
            email, password
        }, {withCredentials: true});

        Axios.default.headers.common['Authorization'] = `Bearer ${data}['token']`;

        setNavigate (true);
    }

    if (navigate){
        return <Navigate to='/'/>
    }   

    return <main className="form-signin">
            <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Welcome to Login!</h1>

                <div className="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" 
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label for="floatingPassword">Password</label>
                </div>
                                                
                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                
            </form>
        </main>
}
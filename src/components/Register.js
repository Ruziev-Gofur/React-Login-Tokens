import { useState } from "react"
import axios from "axios";
import {Navigate} from "react-router-dom"


export const Register = () =>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);

    const submit = async e =>{
        e.preventDefault();

        // Axiosga berilgan URL xato
        await axios.post("http://localhost:3000/api/register", {
            name, email, password
        });

        setNavigate (true);
    }

    if (navigate){
        return <Navigate to='/login'/>
    }   

    return <main className="form-signin">
            <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Welcome to Register!</h1>

                <div className="form-floating">
                    <input class="form-control" placeholder="Name"
                        onChange={e => setName(e.target.value)}
                    />
                    <label> Name</label>
                </div>

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
                                                
                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                
            </form>
        </main>
}





// import { axios } from "axios";

// axios.defaults.baseURL = 'http://localhost:3000/api/';

// axios.interceptors.response.use(resp => resp, async error=>{
//     if(error.response.status === 401){
//         const response = await.axios.post('refresh', {}, {withCredentials: true})
//     }
// });
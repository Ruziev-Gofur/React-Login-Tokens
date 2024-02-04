
import { useEffect, useState } from "react"
import { Axios } from "axios"

export const Home = () =>{

    const [name, setName] = useState('');

    useEffect(()=>{
        (
            async ()=> {
                const {data} = await Axios.get('user');
                setName(data.name);
            }
        )()
    }, [])
    return <div className="form-signin" mt-5 text-center>
        <h1>Hi {name}✋</h1>
    </div>

}
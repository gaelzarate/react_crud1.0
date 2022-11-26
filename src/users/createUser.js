import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const URI = 'http://localhost:8000/users/'

const CompCreateUser = () => {
   const [username, setUsername] = useState ('')
   const [fullname, setFullname] = useState ('')
   const [password, setPassword] = useState ('')
   const [rol, setRol] = useState ('')
   const navigate = useNavigate()

   //procedimiento para guardar
   const store = async(e) =>{
    e.preventDefault()
    await axios.post(URI, {username: username, fullname: fullname, password: password, rol: rol})
    navigate('/')
   }

    return (
        <div className="container text-start">
            <h3>Nuevo User</h3>
            <form onSubmit={store}>
                <div className="mb-3">
                    <label className="form-label">userName</label>
                    <input value={username} type="text" onChange={ (e)=> setUsername(e.target.value)}
                     className ='form-control'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">fullName</label>
                    <input value={fullname} type="text" onChange={ (e)=> setFullname(e.target.value)}
                     className ='form-control'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">password</label>
                    <input value={password} type="password" onChange={ (e)=> setPassword(e.target.value)}
                     className ='form-control'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Rol</label>
                    <input value={rol} type="text" onChange={ (e)=> setRol(e.target.value)}
                     className ='form-control'/>
                </div>
                
                <button type = 'submit' className="btn btn-primary">Store</button>
            </form>
        </div>
    )
}

export default CompCreateUser
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const URI = 'http://localhost:8000/users/'

const CompEditUser = () => {
    const [username, setUsername] = useState ('')
    const [fullname, setFullname] = useState ('')
    const [password, setPassword] = useState ('')
    const [rol, setRol] = useState ('')

    const navigate = useNavigate()

    const {id} = useParams()

    const update = async(e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            username: username, fullname: fullname, password: password, rol: rol
        })
        navigate('/')
    }

    useEffect( () => {
        getUserbyId()
    },[])

    const getUserbyId = async() => {
        const res = await axios.get(URI+id)
        setUsername(res.data.username)
        setFullname(res.data.fullname)
        setPassword(res.data.password)
        setRol(res.data.rol)
    }

    return(
        <div  className="container text-start">
            <h3>Editar User</h3>
            <form onSubmit={update}>
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

export default CompEditUser
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/users/'

const CompShowUsers = () =>{
    const [users, setUser] = useState([])
    useEffect( ()=>{
        getUsers()
    },[])
    //mostrar todos los users
    const getUsers = async () => {
        const res = await axios.get(URI)
        setUser(res.data)
    }
    //eliminar
    const deleteUser = async(id) => {
        await axios.delete(`${URI}${id}`)
        getUsers()
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to = "/createuser" className='btn btn-primary my-2'>Registrar nuevo usuario</Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>userName</th>
                                <th>fullName</th>
                                <th>rol</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map ( (user) => (
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.fullname}</td>
                                    <td>{user.rol}</td>
                                    <td>
                                        <Link to={`/edituser/${user.id}`} className='btn btn-info'><i class="fa-solid fa-user-pen"></i></Link>
                                        <button onClick={()=> deleteUser(user.id)} className='btn btn-danger'><i class="fa-sharp fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowUsers
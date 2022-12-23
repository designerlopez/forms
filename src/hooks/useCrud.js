import axios from 'axios'
import { useState } from 'react'
const useCrud = () => {
    const [users, setUsers] = useState()

    const getAllUsers = () => {
        const URL = 'https://users-crud.academlo.tech/users/'
        axios.get(URL)
          .then(res => setUsers(res.data))
          .catch(err=> console.log(err))
    }

    const createNewUser = data => {
         const URl = 'https://users-crud.academlo.tech/users/'
     
         axios.post(URl, data)
           .then(() => getAllUsers())
           .catch(err=> console.log(err))
    }
     
    const deleteUserById = (id) =>{
       const URL = `https://users-crud.academlo.tech/users/${id}/`
         axios.delete(URL)
           .then(res => getAllUsers())
           .catch(err => console.log(err))
    }

    const updateUserById = (id, data) =>{
       const URL = `https://users-crud.academlo.tech/users/${id}/`
         axios .put(URL, data)
           .then(res => getAllUsers())
           .catch(err=> console.log(err))
    }

    return {users,createNewUser,updateUserById,deleteUserById,getAllUsers}
}

export default useCrud
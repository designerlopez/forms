import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'
import useCrud from './hooks/useCrud'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [closeForm, setCloseForm] = useState(true)
  const [openForm, setOpenForm] = useState(false)

 const {users, createNewUser, updateUserById, deleteUserById, getAllUsers} = useCrud()
 const [updateInfo, setUpdateInfo] = useState()

 useEffect(()=>{
   getAllUsers()
  },[])
  
  return (
    <div className="App">
      <header className='header'>
      <h1 className='App__title'>Users</h1>
      <button onClick={ () => setCloseForm(false)} className='App-btn' > Open Form</button>

      </header>
      <div className={`form-container ${ (closeForm &&'close__form')||( openForm && 'close__form') }`}>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setCloseForm={setCloseForm}
        />
      </div>
      
      <div className='user-container'>
        {
          users?.map(user=>(
             <UserCard
             key={user.id}
             user={user}
             deleteUserById={deleteUserById}
             setUpdateInfo={setUpdateInfo}
             setOpenForm={setOpenForm}
             setCloseForm={setCloseForm}
              />
          ))
        }
       
      </div>
    </div>
  )
}

export default App

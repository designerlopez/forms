import React from 'react'
import './style/userCard.css'

const UserCard = ({user, deleteUserById, setUpdateInfo, setOpenForm}) => {
    console.log(user)
    
    const handleEdit = () => {
        setUpdateInfo(user)
        setOpenForm(false)
    }

  return (
   <article className='card'>
        <h3 className='card__title'>
            {` ${user.first_name} ${user.last_name}`}
        </h3>
            <ul className='card__info'>
                <li className='card__item'> 
                    <span className='card__span'>
                        email: 
                    </span>
                    {user.email}
                </li>
                <li className='card__item'>
                    <span className='card__span'>
                        birthday:
                    </span>   
                    {user.birthday}</li>
            </ul> 
            <div className='card__footer'>
                <button className='card__btn card__btn__trash' onClick={()=>deleteUserById(user.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>
                <button className='card__btn card__btn__edit' onClick={handleEdit}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
            </div>
   </article>
  )
}

export default UserCard
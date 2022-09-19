import React, {useState} from 'react'
import logo from '../../assets/Frame-8589.png'
import './userprofile.css'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../api/axios'


export default function Userprofile() {
    const [oldUser, setOldUser] = useState({})

    let { id } = useParams()

    const token = JSON.parse(localStorage.getItem('token'))
    const updateURL = `/user/update/:id'${id}`
    
    
    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const name = e.target.name;
        const value = e.target.value;
        setOldUser({...oldUser, [name]: value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        e.stopPropagation()
        const response = await api.patch(updateURL, oldUser, {
            headers: {
              'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`
            }
        })
        if(response.statusText === 'OK'){
          navigate('/user/dashboard')
        }
    }

   

    return (
    <>
   
      
        <div className='profile-container'>
            <div className='header-section'></div> 
            <div action="" className='user-setting'>
                    <div className='form-title'><img src={logo}  alt="logo" /></div>  
                    <form className='user-form' onSubmit={handleSubmit}>

                        <h2 className='user-info'>Basic Information</h2>

                        <label htmlFor="First Name">First Name</label>
                        <input className='formInput' type='text' name='firstname' placeholder='Enter your first name' value={oldUser.firstname} onChange={handleUpdate}></input><br />

                        <label htmlFor="Last Name">Last Name</label>
                        <input className='formInput' type='text' name='lastname' placeholder='Enter your lastname name' value={oldUser.lastname} onChange={handleUpdate} /><br />

                        <label htmlFor="Phone Number">Phone Number</label>
                        <input className='formInput' name='phonenumber' type='text' placeholder='Enter your phone number' 
                            value={oldUser.phonenumber} onChange={handleUpdate} /><br />
                        
                        <label htmlFor="profile">Change Avatar</label>
                        <input className='formInput' name='avatar' type='file' value={oldUser.avartar} onChange={handleUpdate} /><br />

                        <button className='saveBtn' type='submit'>Save</button>
                    </form>   
            </div>     
        </div>
    
    </>
  )
}

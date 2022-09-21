import React, { useState, useRef } from 'react'
import logo from '../../assets/Frame-8589.png'
import './userprofile.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../axios';
import { toast } from 'react-toastify';






export default function Userprofile() {
     
    const [user, setUser] = useState({})
    
    const [image, setImage] = useState();
    const fileupload = useRef();


    let { id } = useParams()
    // const id = "a38e737f-362e-441e-bfc1-14c32c4c4bb0"
    let uploadPromise;

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const name = e.target.name;
        const value = e.target.value;

        if (name !== 'avatar') {
            setUser({ ...user, [name]: value })
        }
        else {
            const file = fileupload.current.files[0];
            uploadPromise = convertBase64(file)
                .then((result) => {
                    toast.success("File uploaded!")
                    setImage(result);
                })
                .catch(() => toast.error("File upload failed!"))
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        e.stopPropagation()
        // e.currentTarget.disabled = true
        try {
            if (user.avatar) {
                await uploadPromise; 
            }
            console.log(image);
            const response = await axios.patch( `/user/update/${id}`, {...user, avatar: image })
            if (response.status === 200) {
                toast.success("Update Successful")
                navigate('/user/dashboard')
                }
        } catch (err) {
            toast.error("Update Failed")
        }
    }
    
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    return (
    <>

            <div className='profile-container'>
            {/* <div className='userNav'><img src={convertBase64} alt="avatar" /></div> */}
            <div className='header-section'></div> 
                
            <div action="" className='user-setting'>
                    <div className='form-title'><img src={logo}  alt="logo" /></div>  
                    <form className='user-form' onSubmit={handleSubmit}>

                        <h2 className='user-info'>Basic Information</h2>

                        <label className="user-label" htmlFor="First Name">First Name</label>
                        <input className='formInput form-input' type='text' name='firstname' placeholder='Enter your first name' value={user.firstname} onChange={handleUpdate}></input><br />

                        <label className="user-label" htmlFor="Last Name">Last Name</label>
                        <input className='formInput form-input' type='text' name='lastname' placeholder='Enter your lastname name' value={user.lastname}  onChange={handleUpdate} /><br />

                        <label className="user-label" htmlFor="Phone Number">Phone Number</label>
                        <input className='formInput form-input' name='phonenumber' type='text' placeholder='Enter your phone number' 
                            value={user.phonenumber}  onChange={handleUpdate} /><br />
                        
                        <label className='user-label fileupload' htmlFor="avatar">Change Avatar
                        <input className='formInput form-input' name='avatar' id='avatar' ref={fileupload} type='file' value={user.avatar}   onChange={handleUpdate} /></label><br/>

                        {/* <label htmlFor="avatar">Change Avatar</label>
                        <input type="file" name='avatar' ref={fileupload} value={user.avatar} onChange={handleUpdate} /> */}

                        <button id={user} className='saveBtn' disabled={!user}  type='submit'>Save</button>
                    </form>   
            </div>     
        </div>
    
    </>
  )
}

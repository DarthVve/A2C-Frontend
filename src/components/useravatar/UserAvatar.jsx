import React, { useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from '../../axios';
import { toast } from 'react-toastify';
import './useravatar.css'
import logo from '../../assets/Frame-8589.png'


export default function UserAvatar() {
 
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
    <div className='user-modal'>
    <div className='header-section'></div> 
    <div className='user-container'>
        <img className='profile'  src= '' alt="" />
        <h1>User Profile</h1>
        <form onSubmit={handleSubmit}>
        <label className='user-label fileupload' htmlFor="avatar">
            <input className='formInput form-input' name='avatar' id='avatar' ref={fileupload} type='file' value={user.avatar} onChange={handleUpdate} />
        </label><br />
        <button id={user} className='saveBtn' disabled={!user}  type='submit'>Save</button>
        </form>
    </div>
    </div>
)
}

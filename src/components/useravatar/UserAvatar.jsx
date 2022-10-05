import React, { useState, useRef } from 'react'
import axios from '../../axios';
import { toast } from 'react-toastify';
import './useravatar.css'
import { Button } from '../';


export default function UserAvatar({ close }) {
    const [user] = useState(JSON.parse(localStorage.getItem('userInfo')))
    const [image, setImage] = useState(user.avatar);
    const fileupload = useRef();
    const { id } = user;
    let uploadPromise;

    const hide = () => {
        close();
    };

    const handleUpdate = (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        const file = fileupload.current.files[0];
        uploadPromise = convertBase64(file)
            .then((result) => {
                toast.success("File uploaded!")
                setImage(result);
            })
            .catch(() => toast.error("File upload failed!"))
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        e.stopPropagation()

        try {
            if (!image) {
                await uploadPromise;
            }
            const response = await axios.patch(`/user/update/${id}`, { avatar: image })
            if (response.status === 200) {
                toast.success("Update Successful")
                const avatar = response.data.avatar;
                console.log(avatar)
                const localUser = JSON.parse(localStorage.getItem('userInfo'))
                localUser.avatar = avatar;
                localStorage.setItem('userInfo', JSON.stringify(localUser));
            }
        } catch (err) {
            toast.error("Update Failed")
        }
    };
    
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

    const handleContainerClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className='user-modal' onClick={hide}>
            <div className='user-container' onClick={handleContainerClick}>
                <img className='profile' onClick={() => {fileupload.current.click()}} src={image} alt="" />
                <h1>{user.firstname} {user.lastname}</h1>
                <form onSubmit={handleSubmit}>
                    <label className='user-label fileupload' htmlFor="avatar">
                        <input className='formInput form-input' name='avatar' id='avatar' ref={fileupload} type='file' onChange={handleUpdate} />
                    </label><br />
                    <Button className='saveBtn' disabled={false} type='submit'>Save</Button>
                </form>
            </div>
        </div>
    )
};

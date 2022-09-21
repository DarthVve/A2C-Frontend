import React, {useState, useRef, useNavigate, useParams} from 'react';
import './modal.css'
import { toast } from 'react-toastify';
import axios from '../../axios';



import { FaTimes } from 'react-icons/fa';
const Modal = () => {
  const [image, setImage] = useState();
  const [user, setUser] = useState({})
  const [show, setShow] = useState(false)

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

  const handleShow = () => {
    setShow((!show))
  }

  return (
    <div>
      <button className='modal-btn'>Account</button>
      <button className='close-modal-btn' onClick={handleShow}>
            <FaTimes></FaTimes>
          </button>
      <div className='modal-container'>
        <div>
          
          {show ? "" :
            <form className='user-form' onSubmit={handleSubmit}>
                        <label className='fileupload' htmlFor="avatar">Change Avatar
                        <input className='formInput form-input' name='avatar' id='avatar' ref={fileupload} type='file' value={user.avatar}   onChange={handleUpdate} /></label><br/>
                        <button id={user} className='saveBtn' disabled={!user}  type='submit'>Save</button>
            </form>   
          }
        </div>
      </div>
    </div>
  
  );
};

export default Modal;


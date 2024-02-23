import AvatarEditor from 'react-avatar-editor';
import { Button, Avatar, Box, Slider, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useRef, useState } from 'react';
import userPlaceholder from '../assets/user-placeholder.png'
import Modal from './Modal';
import { verifyFile } from '../utils/verifyFile';
import ImageCrop from './ImageCrop';

const UserImage = () => {
    const initialState = {
        userProfileImage: null,
        selectedFile: null,
        editor: null
    };

    let imageEditor= null;
    const [ imageData, setImageData ] = useState(initialState);
    const [ showModal, setShowModal] = useState(false);

    const setEditorRef = (editor) => imageEditor = editor;

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    const onImageCrop = () => {
        if ( imageEditor !== null ){
            const url = imageEditor.getImageScaledToCanvas().toDataURL();     
            setImageData({ userProfileImage : url });
        }
        toggleModal();
    }
   
    const onImageFileChangeHandler = (e) => {
        const file = e.target.files[0];
        const acceptedFileExtensions = ['png', 'jpg', 'jpeg', 'gif'];

        if( file !== undefined && verifyFile(file, acceptedFileExtensions)){
            setImageData({ selectedFile : file });
            setShowModal(true);
        }
    }

    const RenderProfileImage = () => {
        const profileImage = imageData.userProfileImage ? 
                                imageData.userProfileImage : 
                                userPlaceholder;

        return(
            <div>
                <img className='profile-image' src={profileImage} alt='user-logo' />
                <IconButton onClick={toggleModal} className='update-picture-icon'>
                <EditIcon className='transaction-icons'/>  
                </IconButton>
            </div>
        )
    }

    return (
    <div className='main-div'>
        <RenderProfileImage />
       
        <Modal 
            show    ={showModal}
            onClose ={toggleModal}
            title   ='Crop' >
            <ImageCrop 
                imagefile     ={imageData.selectedFile} 
                setEditorRef  ={setEditorRef} 
                onImageCrop   ={onImageCrop} 
            />  
        </Modal>
    </div>
    )
}

export default UserImage;
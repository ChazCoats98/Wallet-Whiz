import AvatarEditor from 'react-avatar-editor';
import { Button, Avatar, Box, Slider, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useRef, useState } from 'react';
import userPlaceholder from '../assets/user-placeholder.png'
import Modal from './Modal';
import { verifyFile, uploadFile } from '../utils/verifyFile';
import ImageCrop from './ImageCrop';
import { Cloudinary } from '@cloudinary/url-gen';

const UserImage = (props) => {
    const initialState = {
        userProfileImage: null,
        selectedFile: null,
        editor: null
    };

  const cld = new Cloudinary({
    cloud: {cloudName: 'dffm85wab'}
});

    const userid = props.props._id;



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
            uploadFile(file, userid);
        }
    }

    

    const RenderProfileImage = () => {
        const profileImage = imageData.userProfileImage ? 
                                imageData.userProfileImage : 
                                userPlaceholder;

        return(
            <div>
                <img className='profile-image'src={profileImage} alt='user-logo' />
                    <label htmlFor="photo-upload" className="update-picture-icon">
                        <div className="img-upload" >
                            <EditIcon className='edit-icons' src={userPlaceholder}/>
                        </div>
                            <input id="photo-upload" type="file" style={{display:'none'}} 
                            onChange={onImageFileChangeHandler}
                            /> 
                    </label>
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
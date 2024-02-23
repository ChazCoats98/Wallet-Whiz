import { useRef, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import AvatarEditor from 'react-avatar-editor'
import userPlaceholder from '../assets/user-placeholder.png';
import Dropzone from 'react-dropzone';
import { UPDATE_PHOTO } from '../utils/mutations';
import { USER } from '../utils/queries';
import { generateClient } from 'aws-amplify/api';
import { uploadData, getUrl } from 'aws-amplify/storage';

const UserAvatar = () => {
    const editor = useRef(null)
    const [image, setImage] = useState(userPlaceholder);
    const [avatarProps, setAvatarProps] = useState({
        image: "",
        allowZoomOut: false,
        position: { x: 0.5, y: 0.5 },
        scale: 1,
        rotate: 0,
        borderRadius: 50,
        preview: null,
        width: 330,
        height: 330,
    })

    const client = generateClient();
    const [updatePhoto] = useMutation(UPDATE_PHOTO);
    
    const { loading: userLoading, error: userError, data: userData } = useQuery(USER);
    const user = userData.user;
    

    const handleSubmit = async () => {
        if (editor) {
            const img = editor.current.getImageScaledToCanvas()
            await updatePhoto({ variables: { userId: userData.user._id, image: img }});
        }
    };

    const handleNewImage = (e) => {
        setAvatarProps({ image: e.target.files[0]});
    }

    const handleScale = (e) => {
        setAvatarProps({ scale: parseFloat(e.target.value)});
    }

    const handlePositionChange = (position) => {
        setAvatarProps({ position: position });
    }

    return (
        <div>
        <div>
        <AvatarEditor
        ref={editor}
        scale={avatarProps.scale}
        width={avatarProps.width}
        height={avatarProps.height}
        position={avatarProps.position}
        onPositionChange={handlePositionChange}
        rotate={parseFloat(avatarProps.rotate)}
        borderRadius={avatarProps.width / (100 / avatarProps.borderRadius)}
        image={avatarProps.image || userPlaceholder}
        color={[255, 255, 255, 0.6]}
        className="editor-canvas"
        />
        </div>
        <br />
        <label>
        <input
        name="upload-img-input"
        type="file"
        onChange={handleNewImage}
        />
        <h3>Upload Photo</h3>
        </label>
        <br />
        <h3>Zoom</h3>
        <input
        name="scale"
        type="range"
        onChange={handleScale}
        min={avatarProps.allowZoomOut ? "0.1" : "1"}
        max="2"
        step="0.01"
        defaultValue="1"
        />
        <div>
        <button onClick={handleSubmit}>
        SUBMIT
        </button>
        </div>
        </div>
    )
}

export default UserAvatar;
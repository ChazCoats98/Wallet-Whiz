import React, { useState, Fragment } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Button } from '@mui/material';

const ImageCrop = (props) => {
    const { imagefile, setEditorRef, onImageCrop} = props;

    const [ scaleValue, setScaleValue ] = useState(1);

    const onScaleChange = (e) =>{
        const value = parseFloat( e.target.value);
        console.log(value);
        setScaleValue(value); 
    }

    const RenderEditor = () => {
        return (
        <div className='editor'>
            <AvatarEditor 
                image  ={imagefile}
                border={50}
                borderRadius={150}
                scale  ={scaleValue/1.2}
                rotate ={0}
                ref    ={setEditorRef} />
        </div>
        )
    };

    const RenderInputScale = () => {
        return (
        <div className='main'>
            <div> 
                <input 
                    type      ='range'
                    value     ={scaleValue}
                    min       ='1'
                    max       ='10'
                    className ='actions'
                    onChange  ={ e => onScaleChange(e)} />
            </div>
            <div>
                <Button
                    onClick ={onImageCrop}                
                >Crop</Button>
            </div>
        </div>
        )
    };

    return (
        <div>
            <RenderEditor />
            <RenderInputScale />  
        </div>    
    );
}

export default ImageCrop;
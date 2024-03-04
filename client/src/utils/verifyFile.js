import { Cloudinary } from "@cloudinary/url-gen";
import { useQuery, useMutation } from '@apollo/client';
import { ACCOUNTS, USER } from '../utils/queries';

export const verifyFile = (file, acceptedFileExtensions) => {
    const { name } = file;

    var filExtenion = name.substring(name.lastIndexOf(".") + 1);

    if (acceptedFileExtensions.includes(filExtenion)){
        return true;
    }

    return false;
}

export const uploadFile = (file, userid) => {
    console.log(userid, file);

    Cloudinary.uploader.upload(file, {public_id: userid }, 
    (error, result)=> {
        console.log(result);
    })
}
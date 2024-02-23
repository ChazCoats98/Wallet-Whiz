export const verifyFile = (file, acceptedFileExtensions) => {
    const { name } = file;

    var filExtenion = name.substring(name.lastIndexOf(".") + 1);

    if (acceptedFileExtensions.includes(filExtenion)){
        return true;
    }

    return false;
}
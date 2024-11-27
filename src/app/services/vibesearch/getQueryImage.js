export default async function getQueryImage(){
    let imageFile=localStorage.getItem('image-file')
    return 'data:image/jpeg;base64, '+imageFile;
}
import axios from 'axios';
import { UPLOAD_BACKEND_URL } from './Config';


export const handleUploadImage = async (image) => {
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", "yg1vs47b")
    formData.append("cloud_name", "rupam999")




    // try {
    //     const imageUploadResponse = await axios.post(UPLOAD_BACKEND_URL, {
    //         body
    //     });

    //     console.log(imageUploadResponse.data)

    // } catch(error) {
    //     console.log(error);
    // }

    

    let url;

    await fetch(UPLOAD_BACKEND_URL,{
        method:"post",
        body: formData
        })
        .then(resp => resp.json())
        .then(data => {
            url = data.url;
        })
        .catch(err => url = -1)

        return url;
}
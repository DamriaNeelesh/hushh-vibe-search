"use client"
import config from '../../../../resources/config/config'
import styles from './FileInputBox.module.css'
export default function FileInputBox(){
    return (
        <input
              type="file"
              accept="image/*"
              className={`${styles.FileInputBox}`}
              id="searchBox__fileInput"
              onChange={(event) => {
                const file = event.target.files[0];
                
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    const base64String = event.target.result;
                    let temp = base64String.split(";")
                    temp = temp[1].split(",")
                    
                    // You can do whatever you want with the base64String here
                    localStorage.setItem("image-file", temp[1]);
                    window.location.href=(config.redirect_url+`/components/SearchResults?imageSearch=${temp[1].slice(-5)}`);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
    )
}
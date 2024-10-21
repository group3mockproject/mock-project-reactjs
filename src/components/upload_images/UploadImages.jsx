import {useEffect, useState} from "react";
import {FaImage} from "react-icons/fa";
import styles from "./UploadImages.module.scss";

export const UploadImages = ({ onImageFileChange, className, value }) => {
    const [image, setImage] = useState(null);
    const [fileContent, setFileContent] = useState("");

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setFileContent(file.name);
        }
    };

    const handleUpload = async () => {
        if (!image) return;

        try {
            onImageFileChange(image);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    useEffect(() => {
        // Auto upload when image state changes
        if (image) {
            handleUpload().then().catch();
        }
    }, [image]);

    return(
        <>
            <label htmlFor="file" className={styles.fileUploadLabel}>
                <div className={styles.fileUploadDesign}>
                    <FaImage/>
                    <p>Drop your file here</p>
                    <span className={styles.browseButton}>Choose file</span>
                </div>
                <input id="file" type="file" onChange={handleChange}/>
            </label>

            {fileContent &&
                <p>{fileContent}</p>
            }
        </>
    );
}
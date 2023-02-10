import styles from "./editprofile.module.css"
import uploadImg from "../../assets/images/account/upload.png"
import { useNavigate } from "react-router-dom"

const EditProfile = () => {

    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className={styles.container}>

            {/* top */}
            <div className={styles.headWrapper}>
                <span className={`material-icons ${styles.backIcon}`} onClick={handleBack}>arrow_back_ios</span>
                <h4 className={styles.headerText}>edit profile</h4>
            </div>


            {/* Basic data */}
            <div className={styles.basicDataContainer}>
                <h4 className={styles.basicData}>Basic data</h4>
                <div className={styles.basicDataWrapper}>
                    <div className={styles.inputFieldWrapper}>
                        <label className={styles.inputLabel} htmlFor="organizationName">Organisation name</label>
                        <input type="text" name="organizationName" className={styles.inputField} />
                    </div>
                    <div className={styles.inputFieldWrapper}>
                        <label className={styles.inputLabel} htmlFor="organizationEmail">Organisation email address</label>
                        <input type="email" name="organizationEmail" className={styles.inputField} />
                    </div>
                    <div className={styles.inputFieldWrapper}>
                        <label htmlFor="tagline" className={styles.inputLabel}>tagline</label>
                        <input type="text" name="tagline" className={styles.inputField} />
                    </div>
                    <div className={styles.inputFieldWrapper}>
                        <label htmlFor="oidNumber" className={styles.inputLabel}>oid number</label>
                        <input type="text" name="oidNumber" className={styles.inputField} />
                    </div>
                    <div className={styles.inputFieldWrapper}>
                        <label className={styles.inputLabel} htmlFor="activeMembers">Approx. local no. of active members</label>
                        <select name="activeMembers" className={styles.inputField}>
                            <option>1-10</option>
                            <option>11-20</option>
                            <option>21-30</option>
                            <option>31-40</option>
                            <option>41-50</option>
                        </select>
                    </div>
                    <div className={styles.inputFieldWrapper}>
                        <label htmlFor="country" className={styles.inputLabel}>country</label>
                        <input type="text" name="country" className={styles.inputField} />
                    </div>
                    <div className={styles.inputFieldWrapper}>
                        <label htmlFor="city" className={styles.inputLabel}>city</label>
                        <input type="text" name="city" className={styles.inputField} />
                    </div>
                    <div className={styles.inputFieldWrapper}>
                        <label htmlFor="village" className={styles.inputLabel}>village</label>
                        <input type="text" name="village" className={styles.inputField} />
                    </div>
                    <div className={styles.inputFieldWrapper}>
                        <label htmlFor="shortDesc" className={styles.inputLabel}>Short Description(maximumof 1000 words)</label>
                        <textarea name="shortDesc" cols="30" rows="10" className={styles.inputField}></textarea>
                    </div>
                </div>

            </div>

            {/* contact details */}
            <div className={styles.cantactContainer}>
                <h4>Contact details</h4>
                <div className={styles.contactWrapper}>
                    <div className={styles.inputFieldWrapper}>
                        <label htmlFor="webAddress" className={styles.inputLabel}>Website address</label>
                        <input type="url" name="webAddress" className={styles.inputField} />
                    </div>
                    <div className={styles.inputFieldWrapper}>
                        <label htmlFor="linkedIn" className={styles.inputLabel}>LinkedIn</label>
                        <input type="text" name="linkedIn" className={styles.inputField} />
                    </div>
                    <div className={styles.inputFieldWrapper}>
                        <label htmlFor="facebook" className={styles.inputLabel}>Facebook</label>
                        <input type="text" name="facebook" className={styles.inputField} />
                    </div>
                    <div className={styles.inputFieldWrapper}>
                        <label htmlFor="twitter" className={styles.inputLabel}>Twitter</label>
                        <input type="text" name="twitter" className={styles.inputField} />
                    </div>
                </div>
            </div>

            {/* media */}

            <div className={styles.inputFieldWrapper}>
                <h4>Media</h4>
                <div>
                    <p className={styles.uploadLabel}>upload a photo</p>
                    <label for="uploadInput" className={styles.uploadImgLabel}>
                        <img src={uploadImg} alt="upload icon image" />
                    </label>
                    <input type="file" id="uploadInput" name="uploadInput" className={styles.fileUploadInput} />
                    <p className={styles.fileSize}>Size must not be above 2mb</p>
                </div>
            </div>

            <div className={styles.inputFieldWrapper}>
                <div>
                    <p className={styles.uploadLabel}>Upload Cover photo</p>
                    <label for="coverPhotoInput" className={styles.uploadImgLabel}>
                        <img src={uploadImg} alt="upload icon image" />
                    </label>
                    <input type="file" id="coverPhotoInput" name="coverPhotoInput" className={styles.fileUploadInput} />
                    <p className={styles.fileSize}>Size must not be above 32kb</p>
                </div>
            </div>

            <div>
                <h4>Upload photos</h4>
                <label for="uploadPhotosInput">
                    {/* <img src="your-icon-image.png" /> */}
                </label>
                <input type="file" id="uploadPhotosInput" name="uploadPhotosInput" />
                <p>Size must not be above 32kb</p>
            </div>

        </div>
    )
}

export default EditProfile
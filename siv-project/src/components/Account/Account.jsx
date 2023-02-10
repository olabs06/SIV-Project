import styles from "./account.module.css"
import profileImg from "../../assets/images/account/accountProfileImage.png"
import changeImgIcon from "../../assets/images/account/changeImageIcon.png"

import editProfile from "../../assets/images/account/editProfile.png"
import aboutPng from "../../assets/images/account/about.png"
import darkMode from "../../assets/images/account/darkMode.png"
import helpCenter from "../../assets/images/account/helpCenter.png"
import language from "../../assets/images/account/language.png"
import notification from "../../assets/images/account/notification.png"
import privacyPolicy from "../../assets/images/account/privacyPolicy.png"
import BottomNav from "../Home/BottomNav"

import logoutPng from "../../assets/images/account/logout.png"
import { Link } from "react-router-dom"


const Account = () => {

  return (
    <div className={styles.container}>

      {/* top */}
      <section className={styles.profileImgWrapper}>
        <div>
          {/* profile image */}
          <img src={profileImg} alt="profile" className={styles.profileImgBig} />
          {/* icon */}
          <div className={styles.changeProfileIcon}>
            <img src={changeImgIcon} alt="change profile  icon" />
          </div>
        </div>
        {/* name */}
        <h4 className={styles.profileName}>Osifuye Ebunoluwa Mary</h4>
        {/* email */}
        <p className={styles.profileEmail}>alphask37@gmail.com</p>
      </section>

      <hr className={styles.topDivWrapper} />

      {/* middle */}
      <section className={styles.midDivWrapper}>
        <div className={styles.midDivContent}>
          <img src={editProfile} alt="edit profile" className={styles.midDivContentImg} />
          <Link to="/edit"><p>edit profile</p></Link>
          <span></span>
        </div>
        <div className={styles.midDivContent}>
          <Link to="/account/notifications">
            <img src={notification} alt="about" className={styles.midDivContentImg} />
            <p>notifications</p>
          </Link>

          <span></span>
        </div>
        <div className={styles.midDivContent}>
          <img src={language} alt="edit profile" className={styles.midDivContentImg} />
          <p>language</p>
          <span></span>
        </div>
        <div className={styles.midDivContent}>
          <img src={darkMode} alt="edit profile" className={styles.midDivContentImg} />
          <p>dark mode</p>
          <span></span>
        </div>
        <div className={styles.midDivContent}>
          <Link to="/account/about">
            <img src={aboutPng} alt="edit profile" className={styles.midDivContentImg} />
            <p>about</p>
            <span></span>
          </Link>

        </div>
        <div className={styles.midDivContent}>
          <Link to="/account/privacy-statement">
            <img src={privacyPolicy} alt="edit profile" className={styles.midDivContentImg} />
            <p>privacy policy</p>
            <span></span>
          </Link>
        </div>
        <div className={styles.midDivContent}>
          <img src={helpCenter} alt="edit profile" className={styles.midDivContentImg} />
          <p>help center</p>
          <span></span>
        </div>
      </section>

      <hr className={styles.topDivWrapper} />

      {/* bottom */}

      <div className={styles.bottomDiv}>
        <BottomNav />
        <button className={styles.logoutBtn}>
          <img src={logoutPng} alt="logout icon" />
          <Link to="/welcome"><span>Logout</span></Link>
        </button>
      </div>

    </div>
  )
}

export default Account
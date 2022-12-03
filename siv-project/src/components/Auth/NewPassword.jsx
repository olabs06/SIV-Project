import React from 'react'
import styles from "./Auth.module.css"

const NewPassword = ({updatePage}) => {
    return (
        <section className={styles.NewPassWordContainer}>

            <div className={styles.NavbarPlaceHolder}>
                Navbar
            </div>

            <div className={styles.NewPassWordWrapper}>
                <h3 className={styles.NewPassWordHeaderTxt}>Create new password</h3>
                <p className={styles.NewPassWordSecureAcct}>Secure your account</p>

                {/* email and password login */}
                <form>
                    {/*new password */}
                    <div className={styles.NewPasswordWrapper}>
                        <label className={styles.NewPassWordLabel} htmlFor="password">
                            New Password
                        </label>
                        <input className={styles.NewPassWordInput} id="password" name="password" type="password" />
                    </div>

                    {/*confirm password */}
                    <div>
                        <label className={styles.NewPassWordLabel} htmlFor="password">
                            Confirm New Password
                        </label>
                        <input className={styles.NewPassWordInput} id="confirmPassword" name="confirmPassword" type="password" />
                    </div>
                </form>

                <button type='submit' className={styles.NewPassWordConfirmBtn} onClick={() => updatePage(5, true)}>confirm</button>
            </div>


        </section>
    )
}

export default NewPassword
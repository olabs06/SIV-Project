import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./home.module.css"


const BottomNav = () => {
    const [navItem, setNavItem] = useState(1)
    const navigate = useNavigate()

    const goto = (page) => {
        if (page) {
            navigate(`/${page}`)
        } else {
            navigate(`/`)
        }
    }

    return (
        <div className={styles.bottomNavWrapper}>
            {/* home */}
            <div className={styles.navItemWrapper} onClick={() => { setNavItem(1); goto() }} style={{
                color: navItem === 1 ? "#0052AC" : "#4A4A4B"
            }} >
                <button style={{
                    color: navItem === 1 ? "#0052AC" : "#4A4A4B"
                }} className={styles.navItemBtn}>
                    <span className="material-icons">home</span>
                </button>
                <p className={styles.navItemLink} style={{
                    color: navItem === 1 ? "#0052AC" : "#4A4A4B"
                }}>Home</p>
            </div>
            {/* organizations */}
            <div className={styles.navItemWrapper} onClick={() => { setNavItem(2); goto("organisations") }} style={{
                color: navItem === 2 ? "#0052AC" : "#4A4A4B"
            }} >
                <button style={{
                    color: navItem === 2 ? "#0052AC" : "#4A4A4B"
                }} className={styles.navItemBtn}>
                    <span className="material-icons">workspaces</span>
                </button>
                <p className={styles.navItemLink}>organizations</p>
            </div>
            {/* groups */}
            {/* <div>
              <button>
                <span className="material-icons">groups</span>
              </button>
              <p>community</p>
            </div> */}
            {/* account */}

            <div className={styles.navItemWrapper} onClick={() => { setNavItem(3); goto("account") }} style={{
                color: navItem === 3 ? "#0052AC" : "#4A4A4B"
            }} >
                <button style={{
                    color: navItem === 3 ? "#0052AC" : "#4A4A4B"
                }} className={styles.navItemBtn}>
                    <span className="material-icons">person</span>
                </button>
                <p className={styles.navItemLink} style={{
                    color: navItem === 3 ? "#0052AC" : "#4A4A4B"
                }}>account</p>
            </div>
        </div>
    )
}

export default BottomNav
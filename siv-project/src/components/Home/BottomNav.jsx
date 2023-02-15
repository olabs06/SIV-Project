import React, { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageContext } from '../../context/pageContext'
import styles from "./home.module.css"


const BottomNav = () => {
    const navigate = useNavigate()

    const { updateNavItem, pageItem } = useContext(PageContext)
    const [navItem, setNavItem] = useState(pageItem.number);

    const updatePage = (pageItem) => {
        let pageToGo = updateNavItem(pageItem)
        if (pageToGo === 1) {
            setNavItem(1)
            navigate("/")
        } else if (pageToGo === 2) {
            setNavItem(2)
            navigate("/organisations")
        } else { setNavItem(3); navigate("/account") }
    }

    return (
        <div className={styles.bottomNavWrapper}>
            {/* home */}
            <div className={styles.navItemWrapper} onClick={() => {
                updatePage(1)
            }} style={{
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
            <div className={styles.navItemWrapper} onClick={() => {
                updatePage(2)
            }} style={{
                color: navItem === 2 ? "#0052AC" : "#4A4A4B"
            }} >
                <button style={{
                    color: navItem === 2 ? "#0052AC" : "#4A4A4B"
                }} className={styles.navItemBtn}>
                    <span className="material-icons">workspaces</span>
                </button>
                <p className={styles.navItemLink} style={{
                    color: navItem === 2 ? "#0052AC" : "#4A4A4B"
                }}>organizations</p>
            </div>
            {/* groups */}
            {/* <div>
              <button>
                <span className="material-icons">groups</span>
              </button>
              <p>community</p>
            </div> */}
            {/* account */}

            <div className={styles.navItemWrapper} onClick={() => {
                updatePage(3)
            }} style={{
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
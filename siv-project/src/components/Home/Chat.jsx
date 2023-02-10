import styles from "./home.module.css"
// person placeholders
import person1 from "../../assets/images/cityList/person1.png"
import person2 from "../../assets/images/cityList/person2.png"
import person3 from "../../assets/images/cityList/person3.png"
import person4 from "../../assets/images/cityList/person4.png"

const Chat = () => {
    return (
        <>
            <div className={styles.singleChatWrapper}><img src={person1} alt="profile" /></div>
            <div className={styles.chatPerson}>
                <h3 className={styles.chatPersonH3}>Captain Michael</h3>
                <p className={styles.chatSummary}>wow glory to God halleluyah am glad, all praise to yaweh our      sustainer, am so blessed my family and i will prase the lord.!!!</p>
                <p className={styles.reply}>reply</p>
            </div>
        </>
    )
}

export default Chat
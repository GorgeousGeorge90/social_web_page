import styles from './Menu.module.scss';
import Shortcuts from "./Shortcuts/Shortcuts";
import Explore from "./Explore/Explore";
import UserInfo from "./UserInfo/UserInfo";

const Menu =()=>{
    return (<div className={styles.menu}>
        <UserInfo/>
        <Shortcuts/>
        <Explore/>
    </div>)
}

export default Menu
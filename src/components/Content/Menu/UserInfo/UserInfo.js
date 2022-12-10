import styles from './UserInfo.module.scss';
import {NavLink} from 'react-router-dom';
import logo from '../../../../assets/img/content/menu/logo_sm.svg';
import market from '../../../../assets/img/content/menu/market.svg';
import profile from '../../../../assets/img/content/menu/profile.svg';
import messages from '../../../../assets/img/content/menu/message.svg';

const UserInfo = ()=> {
    return(<div className={styles.user_info}>
        <div className={styles.user}>
            <img src={logo} alt='pic'/>
            <span>Mateusz Wierzbicki</span>
        </div>
        <div className={styles.news}>
            <ul>
                <li className={styles.spec}>
                    <NavLink to={'/'}>
                        <img src={profile} alt='pic'/>
                        <span>News Feed</span>
                        <span>...</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>
                        <img src={messages} alt='pic'/>
                        <span>Messages</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>
                        <img src={market} alt='pic'/>
                        <span>Marketplace</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>)
}

export default UserInfo
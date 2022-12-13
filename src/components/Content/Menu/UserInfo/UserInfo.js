import styles from './UserInfo.module.scss';
import logo from '../../../../assets/img/content/menu/logo_sm.svg';
import market from '../../../../assets/img/content/menu/market.svg';
import profile from '../../../../assets/img/content/menu/profile.svg';
import messages from '../../../../assets/img/content/menu/message.svg';
import points from '../../../../assets/img/content/main/points.svg';
import {MenuItem} from '../MenuItem/MenuItem';

const UserInfo = ()=> {
    return(<div className={styles.user_info}>
        <div className={styles.user}>
            <img src={logo} alt='pic'/>
            <span>Mateusz Wierzbicki</span>
        </div>
        <div className={styles.news}>
            <ul>
                <li className={styles.spec}>
                   <MenuItem img={profile}
                             text={'News Feed'}
                             img1={points}
                   />
                </li>
                <li>
                    <MenuItem img={messages}
                              text={'Messages'}
                    />
                </li>
                <li>
                    <MenuItem img={market}
                              text={'Marketplace'}
                    />
                </li>
            </ul>
        </div>
    </div>)
}

export default UserInfo
import styles from './Header.module.scss';
import {NavLink} from "react-router-dom";
import logo from './../../assets/img/header/logo.svg';
import double from './../../assets/img/header/double.svg';
import dialog from './../../assets/img/header/dialogs.svg';


const Header = ()=> {
    return (<header>
                <div className={styles.container}>
                    <div className={styles.search}>
                        <input type="text" placeholder={'Search'}/>
                    </div>
                    <nav>
                        <div className={styles.user}>
                            <img src={logo} alt='logo'/>
                            <span>Mateuz</span>
                        </div>
                        <div className={styles.panel}>
                            <span>|<NavLink to={'/'}>Home</NavLink></span>
                            <span>|<NavLink to={'/'}>Create</NavLink></span>
                        </div>
                        <div className={styles.icons}>
                            <span><img src={double} alt='pic'/></span>
                            <span><img src={dialog} alt='pic'/></span>
                            <span><img src={dialog} alt='pic'/></span>
                        </div>
                    </nav>
                </div>
        </header>)
}

export default Header
import styles from './Header.module.scss';
import logo from './../../assets/img/header/logo.svg';
import double from './../../assets/img/header/double.svg';
import dialog from './../../assets/img/header/dialogs.svg';
import icons from './../../assets/img/header/icons.svg';


const Header = ()=> {
    return (<header>
                <div className={styles.container}>
                    <div className={styles.search}>
                        <input type="text" placeholder={'Search'}/>
                    </div>
                    <nav>
                        <div className={styles.panel}>
                            <div className={styles.user}>
                                <img src={logo} alt='logo'/>
                                <span>Mateuz|</span>
                            </div>
                            <span><a href={'/'}>Home</a>|</span>
                            <span><a href={'/'}>Create</a>|</span>
                            <span><img src={icons} alt='icons'/></span>
                        </div>
                    </nav>
                </div>
        </header>)
}

export default Header
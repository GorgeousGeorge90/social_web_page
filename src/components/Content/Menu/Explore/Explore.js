import styles from './Explore.module.scss';
import flag from '../../../../assets/img/content/menu/flag.svg';
import headphones from '../../../../assets/img/content/menu/headphones.svg';
import home from '../../../../assets/img/content/menu/home.svg';
import games from '../../../../assets/img/content/menu/games.svg';
import arrow from '../../../../assets/img/content/menu/arrow.svg';

const Explore = ()=> {
    return (<div className={styles.explore}>
            <p><b>Explore</b></p>
            <ul>
                <li><a href={'/'}>
                    <img src={flag} alt='pic'/>
                    <span>Pages</span>
                </a></li>
                <li><a href={'/'}>
                    <img src={headphones} alt='pic'/>
                    <span>Groups</span>
                </a></li>
                <li><a href={'/'}>
                    <img src={home} alt='pic'/>
                    <span>Events</span>
                </a></li>
                <li><a href={'/'}>
                    <img src={games} alt='pic'/>
                    <span>Games</span>
                </a></li>
                <li><a  href={'/'}>
                    <img src={arrow} alt='pic'/>
                    <span className={styles.spec}>See more...</span>
                </a></li>
            </ul>
    </div>
    )
}

export default Explore
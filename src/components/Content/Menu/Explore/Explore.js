import styles from './Explore.module.scss';
import flag from '../../../../assets/img/content/menu/flag.svg';
import headphones from '../../../../assets/img/content/menu/headphones.svg';
import home from '../../../../assets/img/content/menu/home.svg';
import games from '../../../../assets/img/content/menu/games.svg';
import arrow from '../../../../assets/img/content/menu/arrow.svg';
import {MenuItem} from "../MenuItem/MenuItem";

const Explore = () => {
    return (<div className={styles.explore}>
            <p><b>Explore</b></p>
            <ul>
                <li>
                    <MenuItem img={flag}
                              text={'Pages'}
                    />
                </li>
                <li>
                    <MenuItem img={headphones}
                              text={'Groups'}
                    />
                </li>
                <li>
                    <MenuItem img={home}
                              text={'Events'}
                    />
                </li>
                <li>
                    <MenuItem img={games}
                              text={'Games'}
                    />
                </li>
                <li className={styles.spec}>
                    <MenuItem img={arrow}
                              text={'See more...'}
                    />
                </li>
            </ul>
        </div>
    )
}

export default Explore
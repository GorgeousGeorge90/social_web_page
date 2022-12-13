import styles from './Shortcuts.module.scss';
import cup from '../../../../assets/img/content/menu/cup.svg';
import {MenuItem} from '../MenuItem/MenuItem';

const Shortcuts = ()=>{
    return (<div className={styles.shortcuts}>
            <p><b>Shortcuts</b></p>
            <ul>
                <li><MenuItem img={cup}
                              text={'Product Design'}
                /></li>
                <li><MenuItem img={cup}
                              text={'UX & UI'}
                /></li>
                <li><MenuItem img={cup}
                              text={'Figma'}
                /></li>
                <li><MenuItem img={cup}
                              text={'Ant Design'}
                /></li>
            </ul>
    </div>)
}

export default Shortcuts
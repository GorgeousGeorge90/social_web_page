import styles from './Shortcuts.module.scss';
import {NavLink} from 'react-router-dom';
import cup from '../../../../assets/img/content/menu/cup.svg';

const Shortcuts = ()=>{
    return (<div className={styles.shortcuts}>
            <p><b>Shortcuts</b></p>
            <ul>
                <li><NavLink to={'/'}>
                    <img src={cup} alt='pic'/>
                    <span>Product Design</span>
                </NavLink></li>
                <li><NavLink to={'/'}>
                    <img src={cup} alt='pic'/>
                    <span>UX & UI</span>
                </NavLink></li>
                <li><NavLink to={'/'}>
                    <img src={cup} alt='pic'/>
                    <span>Figma</span>
                </NavLink></li>
                <li><NavLink to={'/'}>
                    <img src={cup} alt='pic'/>
                    <span>Ant Design</span>
                </NavLink></li>
            </ul>
    </div>)
}

export default Shortcuts
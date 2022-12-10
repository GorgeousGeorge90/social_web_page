import arrow from "../../assets/img/content/menu/arrow.svg";
import styles from './More.module.scss';


const More = ()=> {
    return (<div className={styles.more}>
        <a  href={'/'}>
            <img src={arrow} alt='pic'/>
            <span>See more...</span>
        </a>
    </div>)
}

export default More
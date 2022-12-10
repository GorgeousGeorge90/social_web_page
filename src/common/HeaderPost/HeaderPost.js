import styles from './HeaderPost.module.scss';
import gear from './../../assets/img/content/main/gear.svg';
import points from './../../assets/img/content/main/points.svg';



const HeaderPost = ({logo, name, time})=> {
    return (<div className={styles.header}>
            <div className={styles.logo}><img src={logo} alt='pic'/></div>
            <p className={styles.name}>{name}</p>
            <div className={styles.info}>
                <span>{time} hrs</span>
                <span className={styles.point}></span>
                <span className={styles.gear}><img src={gear} alt='gear'/></span>
            </div>
            <div className={styles.points}><img src={points} alt='points'/></div>
        </div>
    )
}

export default HeaderPost
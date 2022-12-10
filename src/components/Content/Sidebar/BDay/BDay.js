import styles from './BDay.module.scss';
import present from  './../../../../assets/img/content/sidebar/present.svg';

const BDay = ()=> {
    return (<div className={styles.content}>
        <div className={styles.container}>
                <img src={present} alt='present'/>
                <p>
                    <span>John Doe</span>
                    s’ birthday is today
                </p>
            </div>
    </div>)
}

export default BDay
import styles from './YourPage.module.scss';
import logo from '../../../../assets/img/content/sidebar/con.svg';
import dialog from '../../../../assets/img/content/sidebar/dialog.svg';
import bell from '../../../../assets/img/content/sidebar/bells.svg';
import basic from '../../../../assets/img/content/sidebar/basic.svg';

const YourPage = ()=> {
    return (<div className={styles.content}>
        <div className={styles.container}>
            <div className={styles.header}>
                <p>Your page</p>
                <p>...</p>
            </div>
            <div className={styles.body}>
                <div className={styles.info}>
                    <div className={styles.logo}>
                        <img src={logo} alt='logo'/>
                    </div>
                    <p className={styles.title}>Concuria</p>
                    <div className={styles.text}>
                        <p>
                            <img src={dialog} alt='dialog'/>
                            Messages
                        </p>
                        <p>
                            <img style={{paddingRight:'6.75px'}} src={bell} alt='!'/>
                            Notifications
                            <img style={{paddingLeft:'6px'}}  src={basic} alt='basic'/>
                        </p>
                    </div>
                </div>
                <div className={styles.btn_group}>
                    <button>Likes</button>
                    <button>Views</button>
                    <button>Posts</button>
                </div>
                <div className={styles.other}>
                    <p>262</p>
                    <p>5 likes this week</p>
                </div>
            </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.options}>
            <p>Options</p>
            <div></div>
        </div>
    </div>)
}

export default YourPage
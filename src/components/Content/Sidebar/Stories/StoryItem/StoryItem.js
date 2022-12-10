import styles from './StoryItem.module.scss';

const StoryItem = ({logo,title,text })=> {
    return (<div className={styles.content}>
        <div className={styles.logo}><img src={logo} alt='logo'/></div>
        <div className={styles.body}>
            <p className={styles.title}>{title}</p>
            <p className={styles.text}>{text}</p>
        </div>
    </div>)
}

export default StoryItem
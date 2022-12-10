import styles from './PostCreator.module.scss';
import logo from './../../../../assets/img/content/main/logo.svg';

const PostCreator =()=> {
    return (<div className={styles.post}>
        <div className={styles.header}>
            <p>Create post</p>
        </div>
        <div className={styles.container}>
            <div className={styles.body}>
                <img src={logo} alt='logo'/>
                <span>What’s on your mind, Mateusz?</span>
            </div>
            <div className={styles.footer}>
                <ul>
                    <li><button>Photo/Video</button></li>
                    <li><button>Tag friends</button></li>
                    <li><button>Feeling/Activ...</button></li>
                    <li><button style={{width: '40px'}}>...</button></li>
                </ul>
            </div>
        </div>
    </div>)
}

export default PostCreator
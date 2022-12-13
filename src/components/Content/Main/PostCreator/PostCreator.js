import styles from './PostCreator.module.scss';
import logo from './../../../../assets/img/content/main/logo.svg';
import smile from './../../../../assets/img/content/main/smile.svg';
import picture from './../../../../assets/img/content/main/picture.svg';
import add from './../../../../assets/img/content/main/user-add.svg';
import btn from './../../../../assets/img/content/main/Button.svg';


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
                    <li><Button img={picture} text={'Photo/Video'}/></li>
                    <li><Button img={add} text={'Tag friends'}/></li>
                    <li><Button img={smile} text={'Feeling/Activ...'}/></li>
                    <li><img src={btn} alt='btn'/></li>
                </ul>
            </div>
        </div>
    </div>)
}

const Button = ({img,text})=> {
    return (<button>
            <img src={img} alt='pic'/>
            {text}
        </button>
    )
}

export default PostCreator
import styles from './Main.module.scss';
import PostCreator from './PostCreator/PostCreator';
import UserPost from './UserPost/UserPost';
import NewsPost from './NewsPost/NewsPost';

const Main =()=> {
    return (<div className={styles.main}>
        <PostCreator/>
        <UserPost/>
        <NewsPost/>
    </div>)
}

export default Main
import styles from './UserPost.module.scss';
import HeaderPost from '../../../../common/HeaderPost/HeaderPost';
import logo from '../../../../assets/img/content/main/large_logo.svg';
import pic from '../../../../assets/img/content/main/IMG.svg';
import like from '../../../../assets/img/content/main/like.svg';
import comment from '../../../../assets/img/content/main/comment.svg';
import share from '../../../../assets/img/content/main/share.svg';
import mini from '../../../../assets/img/content/main/mini.svg';

const UserPost =()=> {
    return (<div className={styles.user_post}>
                <HeaderPost name={'Mateusz Wierzbicki'}
                            time={'3'}
                            logo={logo}
                />
                <div className={styles.advice}>
                     <p>
                         Did you know that all of this was made using only
                         components and styles from Ant Desing System for Figma?
                     </p>
                     <p className={styles.learn}>Learn more: <a href={'/'}>https://antforfigma.com</a></p>
                </div>
                <div className={styles.content}>
                    <img src={pic} alt='pic'/>
                    <div className={styles.like}>
                        <img src={mini} alt='pic'/>
                        <span>23</span>
                    </div>
                </div>
                <div className={styles.footer}>
                    <ul>
                        <li>
                            <img src={like} alt='pic'/>
                            <span>Like</span>
                        </li>
                        <li>
                            <img src={comment} alt='pic'/>
                            <span>Comment</span>
                        </li>
                        <li>
                            <img src={share} alt='pic'/>
                            <span>Share</span>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default UserPost
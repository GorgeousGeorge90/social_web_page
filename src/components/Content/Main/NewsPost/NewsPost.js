import styles from './NewsPost.module.scss';
import HeaderPost from '../../../../common/HeaderPost/HeaderPost';
import logo from '../../../../assets/img/content/main/Figma.svg';

const NewsPost =()=> {
    return (<div className={styles.news_post}>
            <HeaderPost name={'Figma'}
                        time={'6'}
                        logo={logo}
            />
            <div className={styles.news}>
                <p>
                    📙 Want to implement type in your design system in Figma?
                    This guide covers everything you should consider,
                    from choosing the right typography scale to naming
                    and organizing your text styles.
                </p>
            </div>
            </div>
    )
}

export default NewsPost
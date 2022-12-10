import styles from './Stories.module.scss';
import spot from '../../../../assets/img/content/sidebar/spot.svg';
import con from '../../../../assets/img/content/sidebar/con.svg';
import figma from '../../../../assets/img/content/sidebar/figma.svg';
import ant from '../../../../assets/img/content/sidebar/ant.svg';
import clock from '../../../../assets/img/content/sidebar/clock.svg';
import StoryItem from './StoryItem/StoryItem';
import More from '../../../../common/More/More';

const Stories = ()=> {
    const data = [
        {logo:spot,title: 'Add your story', text:'Share a photo or video or write something'},
        {logo:con,title: 'Concuria', text:'4 hours ago'},
        {logo:figma,title: 'Figma', text:'5 hours ago'},
        {logo:ant,title: 'Ant Design', text:'6 hours ago'},
    ]

    return (<div className={styles.content}>
        <div className={styles.container}>
            <div className={styles.header}>
                <p style={{fontWeight:'bolder'}}>Stories</p>
                <div className={styles.info}>
                    <span className={styles.clock}>
                       <img src={clock} alt='clock'/>
                       <a href={'/'}>Archive</a>
                    </span>
                    <div className={styles.point}></div>
                    <span><a href='/'>Settings</a></span>
                </div>
            </div>
            <div className={styles.body}>
                <ul>
                {
                    data.map(item=>{
                        return <li key={data.indexOf(item)}>
                            <StoryItem
                                logo={item.logo}
                                title={item.title}
                                text={item.text}
                            />
                        </li>
                    })
                }
                </ul>
            </div>
            <More/>
        </div>
    </div>)
}

export default Stories
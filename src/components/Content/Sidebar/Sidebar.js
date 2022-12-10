import styles from './Sidebar.module.scss';
import Stories from './Stories/Stories';
import YourPage from './YourPage/YourPage';
import BDay from './BDay/BDay';

const Sidebar =()=> {
    return (<div className={styles.container}>
            <Stories/>
            <BDay/>
            <YourPage/>
        </div>
    )
}

export default Sidebar
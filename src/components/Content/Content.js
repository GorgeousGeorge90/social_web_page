import styles from './Content.module.scss';
import Menu from './Menu/Menu';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';

const Content = ()=> {
    return (<div className={styles.content}>
                <div className={styles.container}>
                    <Menu/>
                    <Main/>
                    <Sidebar/>
                </div>
            </div>
    )
}

export default Content
import styles from './app.module.css'
import Tabs from "./components/Tabs/Tabs";
import Tab from "./components/Tabs/Tab";

function App() {
    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                <Tabs>
                    <Tab title={'Home'}>
                        This is home
                    </Tab>
                    <Tab title={'Posts'}>
                        This is posts
                    </Tab>
                    <Tab title={'Links'}>
                        This is links
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default App;

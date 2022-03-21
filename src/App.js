import styles from './app.module.css'
import ExampleAutocomplete from "./pages/Autocomplete/ExampleAutocomplete";


function App() {
    return (
        <div className={styles.wrap}>
            <div className={styles.content}>
                {/*<ExampleCollapse/>*/}
                {/*<ExampleTabs/>*/}
                <ExampleAutocomplete/>
            </div>
        </div>
    );
}

export default App;

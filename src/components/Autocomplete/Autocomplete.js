import React, {useEffect, useState} from 'react';
import styles from './autocomplete.module.css'
import useDebounce from "../../hooks/useDebounce";

const Autocomplete = ({fetchFunction}) => {
    const [value, setValue] = useState('')
    const [items, setItems] = useState([])
    const debouncedValue = useDebounce(value, 500)

    const handleValue = (e) => setValue(e.target.value)
    const handleSelectValue = () => {

    }

    useEffect(() => {
        fetchFunction(debouncedValue).then(res => setItems([res]))
    }, [debouncedValue])

    return (
        <div className={styles.wrap}>
            <input type="text" className={styles.input} value={value} onChange={handleValue}/>
            <ul className={styles.result}>
                {
                    items.map(item => {
                        console.log(item)
                        return (
                            <li className={styles.resultItem}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Autocomplete;
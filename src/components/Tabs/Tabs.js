import React, {useState} from 'react';
import styles from './tabs.module.css'

const Tabs = ({children}) => {
    const [active, setActive] = useState(Array.isArray(children) ? children[0].props.title : children.props.title)

    const handleActive = (title) => setActive(title)

    return (
        <div className={styles.wrap}>
            <ul className={styles.tabs}>
                {
                    Array.isArray(children) ?
                        children.map(listItem => (
                            <li className={active === listItem.props.title? styles.active : ''} onClick={() => handleActive(listItem.props.title)}>
                                {listItem.props.title}
                            </li>
                        )) :
                        <li className={active === children.props.title ? styles.active : ''} onClick={() => handleActive(children.props.title)}>
                            {children.props.title}
                        </li>
                }
            </ul>
            {children.map(child => child.props.title === active && child)}
        </div>
    );
};

export default Tabs;
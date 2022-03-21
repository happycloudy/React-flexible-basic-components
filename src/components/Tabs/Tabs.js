import React, {useState} from 'react';
import styles from './tabs.module.css'

const Tabs = ({children}) => {
    const isChildArray = Array.isArray(children)
    const [active, setActive] = useState(isChildArray ? children[0].props.title : children.props.title)

    const handleActive = (title) => setActive(title)

    return (
        <div className={styles.wrap}>
            <ul className={styles.tabs}>
                {
                    isChildArray ?
                        children.map(listItem => (
                            <li key={listItem.props.title}
                                className={active === listItem.props.title ? styles.active : ''}
                                onClick={() => handleActive(listItem.props.title)}
                            >
                                {listItem.props.title}
                            </li>
                        )) :
                        <li className={active === children.props.title ? styles.active : ''}
                            onClick={() => handleActive(children.props.title)}
                        >
                            {children.props.title}
                        </li>
                }
            </ul>
            {
                isChildArray ?
                    children.map(child => child.props.title === active && child) :
                    children
            }
        </div>
    );
};

export default Tabs;
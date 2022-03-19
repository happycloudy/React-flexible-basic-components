import React from 'react';
import styles from './tabs.module.css'

const Tab = ({children}) => {
    return (
        <div className={styles.content}>
            {children}
        </div>
    );
};

export default Tab;
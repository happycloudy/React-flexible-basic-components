import React, {useEffect, useRef, useState} from 'react';
import styles from './collapse.module.css'
import ArrowIcon from "./ArrowIcon";

const Collapse = ({title, children}) => {
    const [open, setOpen] = useState(false)
    const contentRef = useRef(null)

    const handleOpen = () => setOpen(open => !open)

    useEffect(() => {
        if (contentRef) {
            if (open) {
                contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px'
            } else {
                contentRef.current.style.maxHeight = 0
            }
        }
    }, [contentRef, open])

    return (
        <div className={styles.collapse}>
            <div className={`${styles.collapseTitle} ${open ? styles.active : ''}`} onClick={handleOpen}>
                {title}
                <ArrowIcon active={open}/>
            </div>

            <div className={`${styles.collapseContent} ${open ? styles.active : ''}`} ref={contentRef}>
                <div className={styles.text}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Collapse;
import React, {useEffect, useRef, useState} from 'react';
import styles from './collapse.module.css'
import ArrowIcon from "./ArrowIcon";

const Collapse = () => {
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
                Заголовок
                <ArrowIcon active={open}/>
            </div>

            <div className={`${styles.collapseContent} ${open ? styles.active : ''}`} ref={contentRef}>
                <div className={styles.text}>
                    Очень умный текст много букв Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias
                    aliquid
                    consectetur consequuntur debitis dolorum eligendi enim excepturi facilis fugiat incidunt itaque
                    laboriosam laborum magnam magni modi nesciunt nisi nobis nulla perspiciatis, quaerat quam qui quod
                    repellendus repudiandae saepe sapiente sint totam unde velit. Et, exercitationem fugiat ipsam
                    officia
                    perspiciatis possimus tempore veritatis. Consectetur consequuntur ea eveniet nesciunt quam?
                    Consectetur
                    corporis eaque maiores sapiente. Aspernatur corporis cumque, doloremque doloribus, harum illo maxime
                    molestiae neque nihil porro quibusdam quos saepe sequi totam voluptas! Accusamus beatae eum ex
                    excepturi
                    fugit impedit nostrum odio pariatur unde? Amet, consequuntur excepturi possimus reprehenderit rerum
                    sed.
                </div>
            </div>
        </div>
    );
};

export default Collapse;
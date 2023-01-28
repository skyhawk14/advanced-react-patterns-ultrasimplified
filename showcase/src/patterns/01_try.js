import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './index1.css'
// console.log(styles)
function Icon({ handler: handleClick, isClicked}) {
    return <motion.span
        className={styles.icon}
            whileTap={{
                scale: 1.2,
                transition: { duration: 0.1 },
            }}
            onClick={handleClick}
        >
        <svg
        className={ `${styles.clapIcon} ${isClicked && styles.checked}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='-549 338 100.1 125'
        >
        <path d='M-471.2 366.8c1.2 1.1 1.9 2.6 2.3 4.1.4-.3.8-.5 1.2-.7 1-1.9.7-4.3-1-5.9-2-1.9-5.2-1.9-7.2.1l-.2.2c1.8.1 3.6.9 4.9 2.2zm-28.8 14c.4.9.7 1.9.8 3.1l16.5-16.9c.6-.6 1.4-1.1 2.1-1.5 1-1.9.7-4.4-.9-6-2-1.9-5.2-1.9-7.2.1l-15.5 15.9c2.3 2.2 3.1 3 4.2 5.3zm-38.9 39.7c-.1-8.9 3.2-17.2 9.4-23.6l18.6-19c.7-2 .5-4.1-.1-5.3-.8-1.8-1.3-2.3-3.6-4.5l-20.9 21.4c-10.6 10.8-11.2 27.6-2.3 39.3-.6-2.6-1-5.4-1.1-8.3z' />
        <path d='M-527.2 399.1l20.9-21.4c2.2 2.2 2.7 2.6 3.5 4.5.8 1.8 1 5.4-1.6 8l-11.8 12.2c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l34-35c1.9-2 5.2-2.1 7.2-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l28.5-29.3c2-2 5.2-2 7.1-.1 2 1.9 2 5.1.1 7.1l-28.5 29.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.4 1.7 0l24.7-25.3c1.9-2 5.1-2.1 7.1-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l14.6-15c2-2 5.2-2 7.2-.1 2 2 2.1 5.2.1 7.2l-27.6 28.4c-11.6 11.9-30.6 12.2-42.5.6-12-11.7-12.2-30.8-.6-42.7m18.1-48.4l-.7 4.9-2.2-4.4m7.6.9l-3.7 3.4 1.2-4.8m5.5 4.7l-4.8 1.6 3.1-3.9' />
      </svg>
    </motion.span>
}
function Count({ count,isClicked }) {
    console.log(count)
    return <>
        {isClicked && <motion.span
            animate={{
                y: -30,
                opacity: 1
            }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            initial={{ opacity: 0 }}
            exit={{
                opacity: 0,
                y: 50
            }}
            style={{
                position: 'absolute',
                top: '0px',
                left: '110px',
                background: 'green',
                border: '1px solid green',
                borderRadius: '40px',
                padding: '15px',
                fontSize: '10px',
                color: 'white'
            }}>{`+${count}`}</motion.span>}
    </>
}
function Total({ total }) {
    console.log(total)
    return <>

    </>
}
function Clap() {
    debugger
    const [stats, setStats] = useState({
        count: 0,
        totalCount: 100
    })
    const [isClicked, setIsClicked] = useState(false)
    function clickHandler() {
        console.log('click handles')
        setIsClicked(true)
        setStats((prev) => ({
            count: prev.count + 1,
            totalCount: prev.totalCount +1
        }))
        setTimeout(() => {
            setIsClicked(false)
        },400)
    }
    return (
        <div style={{
            display: 'flex',
            position: 'relative',
            padding: '80px'
        }}>
            
                <Icon handler={ clickHandler} isClicked={isClicked}/>
            <Count count={stats.count} isClicked={isClicked} />
                <Total />
            
        </div>
    )
}
export default Clap
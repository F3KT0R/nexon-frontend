import React from 'react'
import Image from 'next/image';
import shelf from '../../public/shelf.png'
import styles from '../../styles/modules/Main.module.scss'

function Main() {
  return (
    <div className={styles.container}>
        <div className={styles.shelves}>
        <Image 
            src={shelf}
            className={styles.shelf}
            alt='shelf'
            />
            <Image 
            src={shelf}
            className={styles.shelf}
            alt='shelf'
            />
            <Image 
            src={shelf}
            className={styles.shelf}
            alt='shelf'
            />
            <Image 
            src={shelf}
            className={styles.shelf}
            alt='shelf'
            />
       </div>
    </div>
  )
}

export default Main
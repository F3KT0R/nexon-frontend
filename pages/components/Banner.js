import React from 'react'
import Image from 'next/image';
import styles from '../../styles/modules/Banner.module.scss'
import banner from '../../public/headerImage2022.png';

function Banner() {
  return (
    <div>
        <Image 
            src={banner}
            alt='header image'
            className={styles.image}
        />
    </div>
  )
}

export default Banner
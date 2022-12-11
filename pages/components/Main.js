import React from 'react'
import Image from 'next/image';
import shelf from '../../public/shelf.png'
import styles from '../../styles/modules/Main.module.scss'
// import hanger from '../../public/background-new.png'
import sweater_1 from '../../public/sweater1.png'
import sweater_2 from '../../public/sweater2.png'
import sweater_3 from '../../public/sweater3.png'
import sweater_4 from '../../public/sweater4.png'
import sweater_5 from '../../public/sweater5.png'
import sweater_6 from '../../public/sweater6.png'
import sweater_7 from '../../public/sweater7.png'
import sweater_8 from '../../public/sweater8.png'
import sweater_9 from '../../public/sweater9.png'
import sweater_10 from '../../public/sweater10.png'
import sweater_11 from '../../public/sweater11.png'
import sweater_12 from '../../public/sweater12.png'
import folded_beige from '../../public/sweater-beige.png'
import folded_blue from '../../public/sweater-blue.png'
import folded_darkgreen from '../../public/sweater-darkgreen.png'
import folded_green from '../../public/sweater-green.png'
import folded_green2 from '../../public/sweater-green2.png'
import folded_lightblue from '../../public/sweater-lightblue.png'
import folded_lightgreen from '../../public/sweater-lightgreen.png'
import folded_maroon from '../../public/sweater-maroon.png'
import folded_red from '../../public/sweater-red.png'
import folded_white from '../../public/sweater-white.png'

const sweaters = [sweater_1, sweater_2, sweater_3, sweater_4, sweater_5, sweater_6, sweater_7, sweater_8, sweater_9, sweater_10, sweater_11, sweater_12]
const folded_sweaters = [folded_blue, folded_darkgreen, folded_beige, folded_red, folded_green, folded_white, folded_beige, folded_lightgreen, folded_maroon, folded_green2, folded_blue, folded_lightblue]

function Main() {
  return (
    <div className={styles.container}>
      {/* <Image 
        src={hanger}
        className={styles.hanger}
        alt='hanger'
      /> */}
        <div className={styles.clothes}>
          {sweaters.map(sweater => <div className={styles.sweaters}><Image src={sweater} alt={sweater} className={styles.sweater}/></div>)}
        </div>
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
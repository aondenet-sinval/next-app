import Link from "next/link";
import Image from 'next/image'
import React from 'react'
import styles from './css/slidshow.module.css'


const Slidshow = () => {
	return<div className={styles.slider}>
    <Link href="#slide-1" scroll={false}>
      <a>1</a>
    </Link>
    <Link href="#slide-2" scroll={false}>
      <a>2</a>
    </Link>
    <Link href="#slide-3" scroll={false}>
      <a>3</a>
    </Link>
    <div className={styles.slides}>
      <div name="slide-1" id="slide-1">
        <Image className="p-3" alt="Fotos baixadas do pixabay" src="/images/img1min.jpg" width={300} height={200} />
      </div>
      <div name="slide-2" id="slide-2">
        <Image className="p-3" alt="Fotos baixadas do pixabay" src="/images/img2min.jpg" width={300} height={200} />
      </div>
      <div id="slide-3">
	      <Image className="p-3" alt="Fotos baixadas do pixabay" src="/images/img3min.jpg" width={300} height={200} />
      </div>

    </div>
  </div>

}
export default Slidshow;
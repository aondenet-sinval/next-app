import styles from '../styles/Home.module.css'
import React from 'react'
import Image from 'next/image'

export default function Footer(){
		return<footer className={styles.footer}>
							<a
							href="https://www.aondenet.com"
							target="_blank"
							rel="noopener noreferrer"
							>
								Website in developers by{' '}
								<span className={styles.logo}>
									<Image src="/logoaondenet.png" alt="Aondenet Logo" width={30} height={20} />
								</span>
							</a>
				</footer>
}

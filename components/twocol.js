import styles from '../styles/twocol.module.css'

export default function Twocol({ children }) {
  return <div className={styles.cont}>{children}</div>
}
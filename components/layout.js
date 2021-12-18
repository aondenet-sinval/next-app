import NavigBar from './navbar'
import Footer from './footer'
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <NavigBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
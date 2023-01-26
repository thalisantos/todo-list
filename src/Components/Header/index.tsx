import logo from '../../assets/logo.svg'

import styles from './Header.module.css'

export function Header(){
  return (
    <div className={styles.headerContainer}>
    <img src={logo} alt="Logo" />
    </div>
  )
}
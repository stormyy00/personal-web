import styles from '@/styles/layout.module.css'
const Layout = ({ children, title }) => {
  
    return (
      <div>
       
        <div></div>
        <ul className={styles.port}>
        <li>
                <a href="/home">port</a>
              
              </li>
              </ul>
        <header className={styles.navbar}>
          <nav>
            <ul>
              <li>
                <a href="/home">Home</a>
              
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </div>
    )
  }
  
  export default Layout
  
import styles from '@/styles/layout.module.css';
const Navbar = () => {
    return(
    
        <div>
       
        <div></div>
        <ul className={styles.port}>
        <li>
                <a href="/">portfolio</a>
              
              </li>
              </ul>
        <header className={styles.navbar}>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              
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

      </div>
    
    
        );
    
    }
    export default Navbar

import Link from 'next/link'

import styles from '@/styles/Home.module.css'


export default function Home() {
  return (


  <div className={styles.body}>

    <div className={styles.bg}>
    {/* <Image src="/DSC00350.png" alt="me" width="1412" height="400" quality='100' object-fit='fill'/> */}
  </div>

      <div className={styles.title}>
      <h1>Jonathan Trujillo</h1>
      Website Porfolio
      </div>

      <div className={styles.description}>Computer Science student @ 
      University of California, Riverside.
      <div className={styles.cont}>
        <ul>
          <li>
          <a href="/about"><button className={styles.button}>About</button></a>

          </li>
        </ul>
        <ul>
          <li >
              <a href="/projects"><button className={styles.button}>Projects</button></a>
        </li>
        </ul>

      <div className={styles.buttonn}>
        
          <Link href="https://drive.google.com/file/d/1_e6Mw3iJFNE8uHfypWPV6YFh-uYRw57-/view?usp=sharing"><button className={styles.button1}>Resume</button></Link>




          <Link href="https://github.com/stormyy00"><button className={styles.button1}>Github</button></Link>

          </div>
        </div>
      </div>

      <div>


      </div>
      </div>


  )
}



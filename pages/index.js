
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
  

  <div className={styles.body}>

    <div className={styles.image}>
    <Image src="/DSC00350.png" alt="me" width="1412" height="400" object-fit='contain'/>
  </div>

      <div className={styles.title}>
      <h1>Jonathan Trujillo</h1>
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
        
          <Link href="https://drive.google.com/drive/u/1/my-drive"><button className={styles.button1}>Resume</button></Link>




          <Link href="https://drive.google.com/drive/u/1/my-drive"><button className={styles.button1}>Github</button></Link>

          </div>
        </div>
      </div>

      <div>


      </div>
      </div>


  )
}



import Home from '.'
import Image from 'next/image';
import styles from '@/styles/Project.module.css'

const Project = () => {
  return (
    

      <div className={styles.body}>
       <div className={styles.image}>
    <Image src="/1661293325102.jpeg" alt="me" width="1412" height="400" object-fit='contain'/>
  </div>
      <div className={styles.title}>
      <h1>Project Directory</h1>
      <p>C++ | HTML | CSS | Javascript | Python</p>
      </div>

      <div className={styles.slider}>

        <ul className={styles.container}>
          <a href="#">Project 1</a>
          <p className={styles.description}>description geat thime seeing yiou but i miss you 
          al ot plea come bck </p>
        </ul>
        <ul className={styles.container}>
          <a href="#">Project 2</a>
          <p className={styles.description}> description</p>
        </ul>
        <ul className={styles.container}>
          <a href="#">Project 3</a>
          <p>hahah</p>
        </ul>
        <ul className={styles.container}>
          <a href="#">Project 4</a>
          <p>yes</p>
        </ul>
        <ul className={styles.container}>
          <a href="#">Project 5</a>
          <p>c++</p>

        </ul>
       {/* <button id={styles.next}>&gt;</button>
       <button id={styles.prev}>&lt;</button> */}
</div>



      </div>

  )
}

export default Project


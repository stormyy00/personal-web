
import Image from 'next/image';
import styles from '@/styles/Project.module.css'

const Project = () => {
  return (
    

      <div className={styles.body}>
       <div className={styles.bg}>
    {/* <Image src="/1661293325102.jpeg" alt="me" width="1412" height="400" quality="100" layout="contain" /> */}
  </div>
      <div className={styles.title}>
      <h1>Project Directory</h1>
      <p>C++ | HTML | CSS | Javascript | Python</p>
      </div>

      <div className={styles.slider}>

        <ul className={styles.container}>
          <a href="/project1">Personal Website</a>
          <p className={styles.description}>description geat thime seeing yiou but i miss you 
          al ot plea come bck </p>
        </ul>
        <ul className={styles.container}>
          <a href="/project2">Playlist Maker</a>
          <p className={styles.description}> description</p>
        </ul>
        <ul className={styles.container}>
          <a href="/project3">Joke Generator</a>
          <p>hahah</p>
        </ul>
        <ul className={styles.container}>
          <a href="/project4">Monster Hunter RPG</a>
          <p>yes</p>
        </ul>
        <ul className={styles.container}>
          <a href="/project5">CitrusHack 2023 Project</a>
          <p>c++</p>

        </ul>
       {/* <button id={styles.next}>&gt;</button>
       <button id={styles.prev}>&lt;</button> */}
</div>



      </div>

  )
}

export default Project


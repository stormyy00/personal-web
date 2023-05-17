import styles from '@/styles/Project.module.css'
import Link from 'next/link'
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

      <Link href="/project1" className={styles.container}>
          <p className={styles.ptitle} >Personal Website</p>
          {/* <p className={styles.description}>description geat thime seeing yiou but i miss you 
          al ot plea come bck </p> */}
          <div className={styles.img}/>
          </Link>

        <Link href="/project2" className={styles.container}>
          <p className={styles.ptitle} >Monster Hunter RPG</p>
          {/* <p className={styles.description}> description</p> */}
          <div className={styles.img2}/>
          </Link>

        <Link href="/project3"className={styles.container}>
          <p className={styles.ptitle} >Joke Generator</p>
          {/* <p>hahah</p> */}
          <div className={styles.img3}/>
          </Link>

        <Link href="/project4" className={styles.container}>
          <p className={styles.ptitle}>Playlist Maker</p>
          {/* <p>yes</p> */}
          <div className={styles.img4}/>
        </Link>

        <Link href="/project5" className={styles.container}>
          <p className={styles.ptitle}>CitrusHack 2023 Project</p>
          {/* <p>c++</p> */}
          <div className={styles.img5}/>
          </Link>
          <Link href="/project6" className={styles.container}>
          <p className={styles.ptitle}>Spotify Top 10</p>
          {/* <p>c++</p> */}
          <div className={styles.img5}/>
          </Link>
       {/* <button id={styles.next}>&gt;</button>
       <button id={styles.prev}>&lt;</button> */}
</div>



      </div>

  )
}

export default Project


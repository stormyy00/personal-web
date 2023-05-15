import Myapp from '.'

import styles from '@/styles/Project.module.css'

const Project = () => {
  return (
    
    <Myapp title="Projects">
     
      <div className={styles.body}>
      <div className={styles.title}>
      <h1>My Projects</h1>
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
    </Myapp>
  )
}

export default Project


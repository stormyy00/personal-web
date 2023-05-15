import Myapp from '.'
import styles from '@/styles/About.module.css'
const About = () => {
  return (
    <Myapp title="About">
      <div className={styles.body}>
      <div className={styles.title}>
      <h1>About me</h1>
      </div>
      <p>I'm a web developer.</p>
      </div>
    </Myapp>
  )
}

export default About

import Layout from '.'
import styles from '@/styles/About.module.css'
const About = () => {
  return (
    <Layout title="About">
      <div className={styles.title}>
      <h1>About me</h1>
      </div>
      <p>I'm a web developer.</p>
    </Layout>
  )
}

export default About

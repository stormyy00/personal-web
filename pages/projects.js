import Layout from '.'
import styles from '@/styles/Project.module.css'
const Project = () => {
  return (
    <Layout title="Projects">
      <div className={styles.title}>
      <h1>My Projects</h1>
      </div>
      <ul>
        <li>
          <a href="#">Project 1</a>
          <p className={styles.description}>description </p>
        </li>
        <li>
          <a href="#">Project 2</a>
          <p className={styles.description}> description</p>
        </li>
        <li>
          <a href="#">Project 3</a>
        </li>
      </ul>
    </Layout>
  )
}

export default Project
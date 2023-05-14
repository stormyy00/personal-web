import Head from 'next/head'
import styles from '@/styles/index.module.css'
const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
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
      <div className={styles.title}>
      <h1>Welcome to my website!</h1>
      </div>
      <p className={styles.description}>This is the homepage.</p>

      </div>
      <main>{children}</main>
    </div>
  )
}

export default Layout


import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/About.module.css'
const About = () => {
  return (

      <div className={styles.body}>
      <div className={styles.image}>
    <Image src="/image.jpeg" alt="me" width="1412" height="400" object-fit='contain'/>
  </div>
      <div className={styles.title}>
      <h1>About me</h1>
      </div>

<div className={styles.container}>
<div className={styles.card}>
  I'm a web developer.
     20 Years old located in riverside California
      website is designed to show case my personal portfolio of coding projects
      there are plans to add a seperate section for my photgraphy porfolio but
       that is in-developemnt as of April 2023 

       </div>

        <ul>
              <Link href="/projects"><button className={styles.button}>Projects</button></Link>
        </ul>
</div>

      
       </div>


  )
}

export default About

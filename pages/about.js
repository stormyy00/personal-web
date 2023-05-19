
import Link from 'next/link';


import styles from '@/styles/About.module.css'
const About = () => {
  return (
<>
{/* <div className={styles.image}>
    <Image layout='contain' src="/image.jpeg" alt="me" width={1412} height={400} quality='100'/>
  </div> */}

      <div className={styles.body}>


      <div className={styles.bg}>
    {/* <img src="/image.jpeg" alt="me" width={1412} height={400} quality='100'/> */}
  </div>

      <div className={styles.title}>
      <h1>About me</h1>
      </div>

<div className={styles.container}>
<div className={styles.card}>

    
      I am a 20-year-old individual based in Riverside, California. I have developed a website that
       serves as a platform to showcase my personal portfolio of coding projects. The website is designed to 
       highlight my skills and expertise in various programming languages and technologies. As of April 2023, I 
       am also working on incorporating a separate section to showcase my photography portfolio. This section is currently 
       under development and will be added to the website in the future. Through my website, I aim to present my coding p
       rojects and photography skills to potential clients, employers, or anyone interested in my work.

       </div>

        <ul>
              <Link href="/projects"><button className={styles.button}>Projects</button></Link>
        </ul>
</div>

      
       </div>

</>
  )
}

export default About

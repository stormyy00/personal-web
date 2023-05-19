

import styles from '@/styles/projects/p1.module.css'
const Project1 = () => {
    return(
    <>

    <div className={styles.body}>
    <div className={styles.bg}>
    
    </div>
    
    <div className={styles.title}>
        <h1>Personal Website</h1>

    </div>
    <div className={styles.body2}>
</div>
    <div className={styles.columns}>

        <div className={styles.container}>
            <div className={styles.components}>
                Tech Stack:
               <ul>Nextjs
                <p>Vercel</p>
                Tailwind CSS
                </ul>
            </div>


        </div>

        <div className={styles.description}>

        This portfolio website was meticulously crafted to exhibit my
         personal projects and demonstrate my adeptness in website development. 
         It was meticulously designed and skillfully developed within a span of two days, 
         with no less than eight hours dedicated per day. This endeavor provided me with 
         invaluable experience in working with the sophisticated Next.js framework, enabling
          me to refine my proficiency 
         in web development.
         <div className={styles.line}>

         </div>
                </div>
   <div className={styles.link}>Github Repository
        <ul>
                <a href='https://github.com/stormyy00/personal-web'className={styles.button}>View</a>
                </ul>
         </div>
        </div>



    </div>
    
    </>
        );
    
    }
    export default Project1

import styles from '@/styles/p1.module.css'
const Project = () => {
    return(
    <>

    <div className={styles.body}>
    <div className={styles.bg}>
    </div>
    <div className={styles.title}>
        <h1>Personal Website</h1>

    </div>
        <div className={styles.container}>
            <div className={styles.description}>

                <p>
                    This program was developed to showcase my personal projects
                </p>
                components used
               <p>nextjs
                vercel
                </p>
                <p>github reposity</p>
                <a href='https://github.com/stormyy00/personal-web'>Here</a>
            </div>


        </div>
    
    </div>
    
    </>
        );
    
    }
    export default Project

import styles from '@/styles//projects/p3.module.css'
const Project3 = () => {
    return(
        <>
        <div className={styles.body}>
        <div className={styles.bg}>
        </div>
        <div className={styles.title}>
            <h1>Joke Generator</h1>
            -Google Extension
        </div>
        <div className={styles.body2}>
        </div>
    <div className={styles.columns}>

        <div className={styles.container}>
            <div className={styles.components}>
                Components used:
               <ul>HTML
                <p>CSS</p>
                Javascript
                </ul>
            </div>


        </div>
                    <div className={styles.description}>

                    This program was developed to generate random jokes 
                        through an API using this website. The intent of this app is
                        to allow the user to be entertained during a break from 
                        studying, work, etc.
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
    export default Project3
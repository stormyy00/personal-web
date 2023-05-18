
import styles from '@/styles//projects/p2.module.css'
const Project2 = () => {
    return(
    
        <>
        <div className={styles.body}>
        <div className={styles.bg}>
        </div>
        <div className={styles.title2}>
            <h1>Monster Hunter RPG</h1>

            <h1 className={styles.h1}>Developed by Jonathan Trujillo and Ryan Lew</h1>
        </div>
        
        <div className={styles.body2}>
        </div>
    <div className={styles.columns}>

        <div className={styles.container}>
            <div className={styles.components}>
                Components used:
               <ul>C++
                <p>UML Diagram</p>
                    Valgrind(debugger)
                </ul>
            </div>


        </div>
        <div className={styles.description}>

        Drawing inspiration from the hub-based game Monster Hunter, embark on
         thrilling quests and face formidable monsters in intense one-on-one 
         battles. Choose from a variety of quests, strategize your attacks, 
         and prove your skills as you progress through the game. But beware, 
         your health is limited, and if it reaches zero, your journey ends. 
         With a user-friendly interface and dynamic output, our text-based RPG 
         adventure awaits, offering exciting challenges and the thrill of strategic 
         decision-making. Prepare for an unforgettable gaming experience 
        that will leave you craving more thrilling adventures.
 <div className={styles.line}>

 </div>
        </div>
<div className={styles.link}>Github Repository
<ul>
                    <a href='https://github.com/stormyy00/Monster-Hunter-RPG'className={styles.button}>View</a>
               </ul>
                </div>
    
    
            </div>
        
        </div>
        
        </>
    
        );
    
    }
    export default Project2
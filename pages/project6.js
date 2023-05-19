
import styles from '@/styles/projects/p6.module.css'
const Project6 = () => {
    return(
    
        <>

        <div className={styles.body}>
        <div className={styles.bg}>
        
        </div>
        
        <div className={styles.title}>
            <h1>Spotify Top Ten</h1>
    
        </div>
        <div className={styles.body2}>
            </div>
        <div className={styles.columns}>
    
            <div className={styles.container}>
                <div className={styles.components}>
                    Tech Stack:
                   <ul>Python
                    <p>Spotify API</p>
                
            
                    </ul>
                </div>
    
    
            </div>
    
            <div className={styles.description}>
    
            This project is a Python-based application that utilizes the Spotify API to fetch 
            and showcase the top ten most popular artists on Spotify. 
            Features

            Spotify API Integration: The project leverages the Spotify API, which allows it to access a vast music 
            library and retrieve data about artists, including their popularity, genres, and top tracks.

            Top Ten Artists: The application retrieves data from the Spotify API to generate a dynamic list of 
            the top ten most popular artists based on the current rankings. 
            The list is updated regularly to reflect the latest trends and changes in popularity.
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
    export default Project6
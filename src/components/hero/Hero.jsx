import styles from './Hero.module.css'
import heroImage from '../../assets/images/Retink-avatar.png'

const Hero = () => {
  return (
    <section className={styles.heroSection}>
        <div className={styles.heroContent}>
              <p className={styles.title}>Get Advanced AI <br /> +Expert Created</p>
              <span className={styles.logo}>Logos</span>

              <p className={styles.desc}>Boost your sales <span className={styles.extra}>10x faster</span> with content customized by our <br /> unique partnership of <span className={styles.extra}>human creativity and AI optimization</span></p>
        </div>
        <div className={styles.heroImage}>
            <img src={heroImage} alt="" />
        </div> 
    </section>
  )
}

export default Hero

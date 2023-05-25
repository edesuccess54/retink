import styles from './Footer.module.css'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = ({logo}) => {
  return (
    <section className={styles.footerSection}>
        <footer>
            <div className={styles.footerMenu}>
            <div>
                <img className={styles.logo} src={logo} alt="logo" />
                <div className={styles.menu}>
                    <ul>
                        <li>Product by Retink Media UG</li>
                        <li>Bonn, Germany</li>
                    </ul>
                    <ul>
                        <li>Get Early Acess</li>
                        <li>Provide Feedback</li>
                    </ul>
                </div>
            </div>
            <div className={styles.socials}>
                <p>Connect with Us</p>
                <ul>
                    <li className={styles.fb}><FaFacebook /></li>
                    <li className={styles.tw}><FaTwitter /></li>
                    <li className={styles.ig}><FaInstagram /></li>
                    <li className={styles.lin}><AiFillLinkedin /></li>
                    <li className={styles.yt}><FaYoutube /></li>
                    <li className={styles.pt}><FaPinterest /></li>
                </ul>
            </div>
            </div>  
              <div className={styles.copyright}>
                  <p>Copyright © 2021 Retink</p>
                  <ul>
                      <li>Privacy Policy</li>
                      <li>Terms of Service</li>
                  </ul>
              </div>  
        </footer>
    </section>
  )
}

export default Footer

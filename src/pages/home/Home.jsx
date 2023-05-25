import { Link } from 'react-router-dom';
import explainerVideoImage from '../../assets/images/Screenshot.png';
import styles from './Home.module.css';
import logo from '../../assets/images/Logoretinklogo.png'

// data 
import { datas } from '../../data/data';
import { news } from '../../data/newsData';

// compomnents
import News from '../../components/news/News';
import Hero from '../../components/hero/Hero';
import Card from '../../components/card/Card';
import Footer from '../../components/footer/Footer';

const Home = () => {

  return (
    <div className={styles.homeWraper}>
        <Hero />
        <section className={styles.explainerVideo}>
            <h2>explainer video</h2>
            <div className={styles.videowrapper}>
                <img src={explainerVideoImage} alt="Explainer Video" />
            </div>
        </section>
          
        <section className={styles.cardContainer}>
            {datas && datas.map(({title, image, content}) => (
                <Card key={title} title={title} image={image} content={content} /> 
            ))} 
        </section>
          
        <section className={styles.creationSection}>
            <div>
                <h6>Transform your Creation Process</h6>
                <p>With a new approach to ordering content, you can now stop juggling multiple documents and meetings and start publishing content faster and on demand</p>
            </div> 
            <div>
                <h6>Activate your business growth with RetinkContent. </h6>
                <p>Save time and maintain your brand identity within your budget range or sign up for affordable plans and still access multiple content services like:</p>
            </div>
        </section>
          
        <section className={styles.newsSection}>
            {news && news.map(({title, image, content}) => (
                <News key={title} title={title} image={image} content={content} />
            ))}
        </section>
          
        <section className={styles.subscribeSection}>
              <div className={styles.formContainer}>
                  <h6>Sign Up For The BETA to see more</h6>
                <form>
                    <input type="text" placeholder='Business Name' />
                    <input type="text" placeholder='Email' />
                    <button>Notify me</button>
                    <Link to="https://retink.io/fap/" target='_blank'>Sign up as a freelance partner</Link>
                </form>
            </div>
        </section>
        <Footer logo={logo} />  
    </div>
  )
}

export default Home

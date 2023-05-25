import styles from './News.module.css'

const News = ({title, content, image}) => {
  return (
      <div className={styles.newsWrapper}>
        <div className={styles.newsImage}>
            <img src={image} alt='' />
            <p>{title}</p>
        </div>
        <div className={styles.newsContent}>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default News
